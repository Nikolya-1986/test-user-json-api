import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, delay, map, Observable, of } from "rxjs";

import { AuthService } from "../../modules/auth/services/auth.service";

@Injectable()

export class PasswordAsyncValidator implements AsyncValidator {

    constructor(
        private _authService: AuthService,
    ) {}

    private _fetchAdminPassword(password: string): Observable<boolean> {
        const isIncludesPassword = this._authService.getAdminPassword().pipe(
            map((passwords: string[]) => !passwords.includes(password)),
        );
        return isIncludesPassword.pipe(delay(1000));
    };
    
    validate(control: AbstractControl): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
        return this._fetchAdminPassword(control.value).pipe(
            map((password: boolean) => (password ? { existingPassword: true } : null)),
            catchError(() => of(null)),
        );
    };
}