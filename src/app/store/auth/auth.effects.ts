import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../modules/auth/services/auth.service";
import * as authActions from "./auth.actions"

@Injectable()
export class AuthEffect {

    signUp$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(authActions.AuthActionTypes.SIGNUP_REQUEST),
            switchMap((action: any) => {
                const { id, lastName, firstName, email, password } = action;
                return this.authService.signUp(id, lastName, firstName, email, password).pipe(
                    map((signUp) => {
                        return authActions.signUpSuccess({ signUp, redirect: true });
                    }),
                    tap(() => this.router.navigateByUrl('/auth/log-in')),
                    catchError((error) => of(authActions.getFail(error))),
                );
            }),
        );
    });

    logIn$: Observable<Action> = createEffect(() => {
        return this.actions$.pipe(
            ofType(authActions.AuthActionTypes.LOGIN_REQUEST),
            switchMap((action: any) => {
                const { email, password } = action;
                const token = String(Math.floor(Math.random() * 100) + 1);
                return this.authService.logIn(email, password, token).pipe(
                    map((logIn) => {
                        return authActions.logInSuccess({ logIn, redirect: true })
                    }),
                    tap(() => this.router.navigateByUrl('/home')),
                    catchError((error) => of(authActions.getFail(error))),
                );
            }),
        );
    });
    // logInAdmin$: Observable<Action> = createEffect(() => this.actions$ 
    //     .pipe(
    //         ofType(authActions.AuthActionTypes.LOGIN_REQUEST),
    //         switchMap((admin: Auth) => {
    //             const { email, password } = admin;
    //             console.log(admin)
    //             return this.authService.logIn(email, password)
    //             .pipe(
    //                 map((admin) => {
    //                     console.log(admin)
    //                     return authActions.logInSuccess({ logInAdmin: admin })
    //                 }),
    //                 tap((adminToken) => {
    //                     localStorage.setItem('token', adminToken.logInAdmin.token),
    //                     this.router.navigateByUrl('/');
    //                 }),
    //                 catchError((error) => of(authActions.getFail(error)))
    //             )
    //         })
    //     ),
    //     { useEffectsErrorHandler: false }
    // );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router
    ){ }
}