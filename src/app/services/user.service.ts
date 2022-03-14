import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, delay, map, retry, tap } from 'rxjs/operators';

import { UserDTO } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL = 'http://localhost:3000';

    constructor(
        private _httpClient: HttpClient,
    ){}
    
    private httpHeader = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
    };
    
    private errorsBackend(errorHttp: HttpErrorResponse): Observable<any> {
        let message = '';
        if(errorHttp.error instanceof ErrorEvent) {
            message = errorHttp.error.message;
        }else {
            message = `Error Ccode: ${errorHttp.status}\nMessage: ${errorHttp.message}`;
        };
        console.log("Error:", errorHttp);
        return throwError(errorHttp);
    };

    public getUsers(): Observable<UserDTO[]> {
        return this._httpClient.get<UserDTO[]>(`${this.BASE_URL}/results`).pipe(
            retry(3),
            catchError(this.errorsBackend),
        )
    };

    public getUser(id: number): Observable<UserDTO> {
        return this._httpClient.get<UserDTO>(`${this.BASE_URL}/results/${id}`, this.httpHeader).pipe(
            catchError(this.errorsBackend),
        )
    };

    public deleteUser(id: number): Observable<UserDTO> {
        return this._httpClient.delete<UserDTO>(`${this.BASE_URL}/results/${id}`, this.httpHeader).pipe(
            catchError(this.errorsBackend),
        )
    };

    public editUser(user: UserDTO): Observable<UserDTO> {
        return this._httpClient.put<UserDTO>(`${this.BASE_URL}/results/${user.id}`, JSON.stringify(user), this.httpHeader).pipe(
            tap(() => console.log('User edit:', user)),
            catchError(this.errorsBackend),
        )
    };

    public createUser(user: UserDTO): Observable<UserDTO> {
        return this._httpClient.post<UserDTO>(`${this.BASE_URL}/results`, JSON.stringify(user), this.httpHeader).pipe(
            tap(() => console.log('User create:', user)),
            catchError(this.errorsBackend),
        )
    };

    public getLanguages(): Observable<string[]> {
        return this.getUsers().pipe(
            map((response) => {
                const users = response;
                const languages = this.uniqueLanguages(users);
                return languages;
            })
        );
    };

    private uniqueLanguages(userDTO: UserDTO[]): string[] {
        const arraysLanguages = userDTO.map(users => users.language);
        const arrayLanguages = arraysLanguages.reduce((acc, item) => {
            const uniqueLanguages = [...new Set(acc.concat(item))];
            return uniqueLanguages;
        });
        return [...arrayLanguages];
    };

    public isTakenEmail(email: string): Observable<boolean> {
        const isTaken = this.getEmails().pipe(
            map((emails) => emails.includes(email)),
        )
        return isTaken.pipe(delay(500));
    };

    public getEmails(): Observable<string[]> {
        return this.getUsers().pipe(
            map((response) => {
                const emails = response.map(result => result.email);
                return emails;
            })
        )
    };
}