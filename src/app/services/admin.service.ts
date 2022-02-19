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
  
  public signUp(lastName: string, firstName: string, email: string, password: string): Observable<Admin> {
    return this.http.post<Admin>(`${this.BASE_URL}/admin`, { lastName, firstName, email, password })
      .pipe(
        catchError(this.errorsBackend.bind(this)),
      )
  };
}