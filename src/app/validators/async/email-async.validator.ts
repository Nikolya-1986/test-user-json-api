import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { AuthService } from '../../modules/auth/services/auth.service';

@Injectable()

export class EmailAsyncValidator implements AsyncValidator {

    constructor(
        private _authService: AuthService,
    ) {}

    private _fetchAdminEmail(email: string): Observable<boolean> {
        const isIncludesEmail = this._authService.getAdminEmail().pipe(
            map((emails: string[]) => !emails.includes(email)),
        );
        return isIncludesEmail.pipe(delay(1000));
    };

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        const isExistEmail = this._fetchAdminEmail(control.value).pipe(
            map((result: boolean) => (result ? { existingEmail: true } : null)),
            catchError(()=> of(null)),
        );
        return isExistEmail;
    };
}