import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";
import { Auth } from "src/app/interfaces/auth.interface";

import { AuthService } from "../../modules/auth/services/auth.service";
import * as authActions from "./auth.actions"

@Injectable()
export class AuthEffect {

    signUpAdmin$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(authActions.AuthActionTypes.SIGNUP_REQUEST),
            switchMap(admin => { 
                const { id, lastName, firstName, email, password } = admin;
                return this.authService.signUp(id, lastName, firstName, email, password)
                .pipe(
                    map((admin) => authActions.signUpSuccess({ signUpAdmin: admin })),
                    tap(() => this.router.navigateByUrl('/log-in')),
                    catchError((error) => of(authActions.getFail(error)))
                );
            })
        ),
        { useEffectsErrorHandler: false }
    );

    logInAdmin$: Observable<Action> = createEffect(() => this.actions$ 
        .pipe(
            ofType(authActions.AuthActionTypes.LOGIN_REQUEST),
            switchMap((admin: Auth) => {
                const { email, password } = admin;
                console.log(admin)
                return this.authService.logIn(email, password)
                .pipe(
                    map((admin) => {
                        console.log(admin)
                        return authActions.logInSuccess({ logInAdmin: admin })
                    }),
                    tap((adminToken) => {
                        localStorage.setItem('token', adminToken.logInAdmin.token),
                        this.router.navigateByUrl('/');
                    }),
                    catchError((error) => of(authActions.getFail(error)))
                )
            })
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ){ }
}