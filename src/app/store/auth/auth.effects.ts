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
        return this._actions$.pipe(
            ofType(authActions.AuthActionTypes.SIGNUP_REQUEST),
            switchMap((action: any) => {
                const { id, lastName, firstName, email, password } = action;
                return this._authService.signUp(id, lastName, firstName, email, password).pipe(
                    map((signUp) => {
                        return authActions.signUpSuccess({ signUp, redirect: true });
                    }),
                    tap(() => this._router.navigateByUrl('/auth/log-in')),
                    catchError((error) => of(authActions.getFail(error))),
                );
            }),
        );
    });

    logIn$: Observable<Action> = createEffect(() => {
        return this._actions$.pipe(
            ofType(authActions.AuthActionTypes.LOGIN_REQUEST),
            switchMap((action: any) => {
                const { email, password } = action;
                const token = String(Math.floor(Math.random() * 100) + 1);
                return this._authService.logIn(email, password, token).pipe(
                    map((logIn) => {
                        return authActions.logInSuccess({ logIn, redirect: true })
                    }),
                    tap((auth) =>  {
                        localStorage.setItem('token', auth.logIn.token)
                        this._router.navigateByUrl('/home');
                    }),
                    catchError((error) => of(authActions.getFail(error))),
                );
            }),
        );
    });

    logOut$: Observable<Action | any> = createEffect(() => {
        return this._actions$.pipe(
            ofType(authActions.AuthActionTypes.LOGOUT),
            tap(() => {
              this._authService.logout();
              this._router.navigateByUrl('/auth/log-in');
            })
          );
        },
        { dispatch: false }
    );

    getStatus$: Observable<Action | any> = createEffect(() => {
        return this._actions$.pipe(
            ofType(authActions.AuthActionTypes.GET_STATUS),
            switchMap(() => this._authService.getStatus()),
        )}, 
        { dispatch: false }
    );

    constructor(
        private _actions$: Actions,
        private _authService: AuthService,
        private _router: Router
    ){ }
}