import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable({ 
    providedIn: 'root' 
})

export class EmailAsyncValidator implements AsyncValidator{

    constructor(
        private userService: UserService
    ) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        return this.userService.isTakenEmail(control.value).pipe(
            map(result => (result ? { emailTaken: true } : null)),
            catchError(()=> of(null)),
        );
    };
}//-