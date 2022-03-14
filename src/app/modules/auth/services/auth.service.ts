import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';

import { Auth } from '../../../interfaces/auth.interface';

@Injectable()
export class AuthService {

  readonly BASE_URL = 'http://localhost:3000';

  constructor(
    private _http: HttpClient,
    private _errorService: ErrorService,
  ) { }

  public getToken(): string | null {
    return localStorage.getItem('token');
  };

  public sendToken(token: string): void{
    localStorage.setItem("token", token);
  };

  public signUp(id: number, lastName: string, firstName: string, email: string, password: string): Observable<Auth> {
    return this._http.post<Auth>(`${this.BASE_URL}/admin`, { id, lastName, firstName, email, password })
  };

  public logIn(email: string, password: string, token: string): Observable<Auth> {
    return this._http.post<Auth>(`${this.BASE_URL}/login`, { email, password, token, returnSecureToken: true }, { withCredentials: true })
  };

  public logout(): void {
    localStorage.removeItem('token');
  };

  public getAdmins(): Observable<Auth[]> {
    return this._http.get<Auth>(`${this.BASE_URL}/admin`)
    .pipe(
      catchError(this._errorService.errorsBackend.bind(this)),
    )
  };

  public getAdminEmail(): Observable<string[]> {
    return this.getAdmins().pipe(
      map((response: Auth[]) => {
        const emails = response.map(result => result.email);
        return emails;
      }),
    ); 
  };

  public getAdminPassword(): Observable<string[]> {
    return this.getAdmins().pipe(
      map((response: Auth[]) => {
        const passwords = response.map(result => result.password);
        return passwords;
      })
    )
  };

}