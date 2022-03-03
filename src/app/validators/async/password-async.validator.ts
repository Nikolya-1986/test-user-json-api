import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { AuthService } from "../../modules/auth/services/auth.service";

@Injectable()

export class PasswordAsyncValidator implements AsyncValidator {

    constructor(
        private authService: AuthService,
    ) {}
    
    validate(control: AbstractControl): Observable<ValidationErrors | null> | Promise<ValidationErrors | null> {
        return this.authService.isExistAdminPassword(control.value).pipe(
            map(password => (password ? { existingPassword: true } : null)),
            catchError(() => of(null))
        )
    }
}