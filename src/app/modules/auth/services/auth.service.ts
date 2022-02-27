import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Auth } from '../../../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly BASE_URL = 'http://localhost:3000';
  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient
  ) { }

  public getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found';
      case 'INVALID_PASSWORD':
        return 'Invalid Password';
      case 'EMAIL_EXISTS':
        return 'Email already exists';
      default:
        return 'Unknown error occurred. Please try again';
    }
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
  
  public signUp(id: number, lastName: string, firstName: string, email: string, password: string): Observable<Auth> {
    return this.http.post<Auth>(`${this.BASE_URL}/admin`, { id, lastName, firstName, email, password })
      .pipe(
        catchError(this.errorsBackend.bind(this)),
      )
  };

  public logIn(email: string, password: string, token: string ): Observable<Auth> {
    return this.http.post<Auth>(`${this.BASE_URL}/login`, { email, password, token, returnSecureToken: true }, { withCredentials: true })
      .pipe(
        catchError(this.errorsBackend.bind(this)),
      )
  };

  public getAdmins(): Observable<Auth[]> {
    return this.http.get<Auth>(`${this.BASE_URL}/admin`).pipe(
      catchError(this.errorsBackend.bind(this)),
    )
  };

  private getAdminEmail(): Observable<string[]> {
    return this.getAdmins().pipe(
      map((response) => {
        const emails = response.map(res => res.email);
        return emails;
      }),
    ); 
  };

  public isExistAdminEmail(email: string): Observable<boolean> {
    const isExistEmail = this.getAdminEmail().pipe(
      map((emails) => !emails.includes(email)),
    );
    return isExistEmail.pipe(delay(1000));
  };

  private getAdminPassword(): Observable<string[]> {
    return this.getAdmins().pipe(
      map((response) => {
        const passwords = response.map(result => result.password);
        return passwords;
      })
    )
  };

  public isExistAdminPassword(password: string):  Observable<boolean> {
    const isExistPassword = this.getAdminPassword().pipe(
      map((passwords) => !passwords.includes(password)),
    );
    return isExistPassword.pipe(delay(1000));
  };
  
}