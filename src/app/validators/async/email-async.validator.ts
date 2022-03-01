import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthService } from '../../modules/auth/services/auth.service';

@Injectable({ 
    providedIn: 'root' 
})

export class EmailAsyncValidator implements AsyncValidator{

    constructor(
        private authService: AuthService
    ) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.authService.isExistAdminEmail(control.value).pipe(
            map(result => (result ? { existingEmail: true } : null)),
            catchError(()=> of(null)),
        );
    };
}