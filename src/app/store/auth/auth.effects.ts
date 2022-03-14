import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";
import { FacadeService } from "src/app/services/facades/facade.service";

import * as fromAuthActions from "./auth.actions"

@Injectable()
export class AuthEffect {

    signUp$: Observable<Action> = createEffect(() => {
        return this._actions$.pipe(
            ofType(fromAuthActions.AuthActionTypes.SIGNUP_REQUEST),
            switchMap((action: any) => {
                const { id, lastName, firstName, email, password } = action;
                return this._facadeService.signUp(id, lastName, firstName, email, password).pipe(
                    map((signUp) => {
                        return fromAuthActions.signUpSuccess({ signUp });
                    }),
                    tap(() => this._router.navigateByUrl('/auth/log-in')),
                    catchError((error) => of(fromAuthActions.getFail(error))),
                );
            }),
        );
    });

    logIn$: Observable<Action> = createEffect(() => {
        return this._actions$.pipe(
            ofType(fromAuthActions.AuthActionTypes.LOGIN_REQUEST),
            switchMap((action: any) => {
                const { email, password } = action;
                const token = String(Math.floor(Math.random() * 100) + 1);
                return this._facadeService.logIn(email, password, token).pipe(
                    map((logIn) => {
                        return fromAuthActions.logInSuccess({ logIn })
                    }),
                    tap((auth) =>  {
                        localStorage.setItem('token', auth.logIn.token)
                        this._router.navigateByUrl('/home');
                    }),
                    catchError((error) => of(fromAuthActions.getFail(error))),
                );
            }),
        );
    });

    logOut$: Observable<Action | any> = createEffect(() => {
        return this._actions$.pipe(
            ofType(fromAuthActions.AuthActionTypes.LOGOUT),
            tap(() => {
              this._facadeService.logout();
              this._router.navigateByUrl('/auth/log-in');
            })
          );
        },
        { dispatch: false }
    );

    constructor(
        private _actions$: Actions,
        private _facadeService: FacadeService,
        private _router: Router
    ){ }
}