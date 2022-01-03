import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, retry } from 'rxjs/operators';

import { UserDTO } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly BASE_URL = 'http://localhost:3000';

    constructor(
        private httpClient: HttpClient
    ){}
    
    private errorsBackend(errorHttp: HttpErrorResponse) {
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
        return this.httpClient.get<UserDTO[]>(`${this.BASE_URL}/results`).pipe(
            // tap(users => console.log("Users:", users)),
            retry(3),
            catchError(this.errorsBackend),
        )
    };

    public getLanguages(): Observable<string[]> {
        return this.httpClient.get<UserDTO[]>(`${this.BASE_URL}/results`).pipe(
            map((response) => {
                const result = response;
                const languages = this.uniqueLanguages(result);
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
    }
}