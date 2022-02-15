import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Admin } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

private readonly BASE_URL = 'http://localhost:3000';
  public error$: Subject<string> = new Subject<string>()
  
  constructor(
    private http: HttpClient
  ) { }

  private errorsBackend(errorHttp: HttpErrorResponse) {
    const message = errorHttp.error.message

    switch (message) {
      case "Invalid email":
        this.error$.next('Invalid email address!!!')
        break
      case "Invalid password":
        this.error$.next('Invalid password!!!')
        break
      case "Email not found":// не работает этот case
        this.error$.next('The user with the email address is not registered!!!')
        break 
      case "This email is already registered":
        this.error$.next('This email is already registered!!!')
        break
    }

    console.log(message)
    return throwError(errorHttp)
  }
  
  signUp(lastName: string, firstname: string, email: string, password: string): Observable<Admin> {
    return this.http.post<Admin>(`${this.BASE_URL}/admin`, { lastName, firstname, email, password })
      .pipe(
        catchError(this.errorsBackend.bind(this))
      )
  }
}