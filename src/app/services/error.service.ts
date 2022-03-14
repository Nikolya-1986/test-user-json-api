import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    
    public error$: Subject<string> = new Subject<string>();

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
    
    public errorsBackend(errorHttp: HttpErrorResponse): Observable<any> {
        let message = '';
        if(errorHttp.error instanceof ErrorEvent) {
            message = errorHttp.error.message;
        }else {
            message = `Error Ccode: ${errorHttp.status}\nMessage: ${errorHttp.message}`;
        };
        console.log("Error:", errorHttp);
        return throwError(errorHttp);
    };
    
}