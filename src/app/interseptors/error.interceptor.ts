import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private _router: Router,
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const error = next.handle(request).pipe(
            catchError((rejected: HttpErrorResponse) => {
                if(rejected instanceof HttpErrorResponse && rejected.status === 401){
                    localStorage.removeItem('token');
                    this._router.navigateByUrl('/auth/log-in')
                }
                return throwError(rejected);
            }),
        );
        return error;
    };
}