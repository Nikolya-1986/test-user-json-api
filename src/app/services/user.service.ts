import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, map } from 'rxjs/operators';

import { Position, PositionDTO } from "../interfaces/position.interface";
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

    public getUsers(): Observable<UserDTO<PositionDTO>[]> {
        return this._httpClient.get<UserDTO<PositionDTO>[]>(`${this.BASE_URL}/users`);
    };

    public getUser(id: number): Observable<UserDTO<PositionDTO>> {
        return this._httpClient.get<UserDTO<PositionDTO>>(`${this.BASE_URL}/users/${id}`, this.httpHeader)
    };

    public deleteUser(id: number): Observable<UserDTO<PositionDTO>> {
        return this._httpClient.delete<UserDTO<PositionDTO>>(`${this.BASE_URL}/users/${id}`, this.httpHeader)
    };

    public editUser(user: UserDTO<PositionDTO>): Observable<UserDTO<PositionDTO>> {
        return this._httpClient.put<UserDTO<PositionDTO>>(`${this.BASE_URL}/users/${user.id}`, JSON.stringify(user), this.httpHeader)
    };

    public createUser(user: UserDTO<PositionDTO>): Observable<UserDTO<PositionDTO>> {
        return this._httpClient.post<UserDTO<PositionDTO>>(`${this.BASE_URL}/users`, JSON.stringify(user), this.httpHeader);
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

    private uniqueLanguages(userDTO: UserDTO<PositionDTO>[]): string[] {
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

    public getUserPosition(url: string): Observable<Position> {
        return this._httpClient.get<Position>(url);
    };
}