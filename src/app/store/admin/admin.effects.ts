import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";
import { Admin } from "src/app/interfaces/admin.interface";

import { AdminService } from "../../services/admin.service";
import * as adminActions from "../admin/admin.actions"

@Injectable()
export class AdminEffect {

    signUpAdmin$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(adminActions.AuthActionTypes.SIGNUP_REQUEST),
            switchMap(admin => { 
                const { id, lastName, firstName, email, password } = admin;
                return this.adminService.signUp(id, lastName, firstName, email, password)
                .pipe(
                    map((admin) => adminActions.signUpSuccess({ signUpAdmin: admin })),
                    tap(() => this.router.navigateByUrl('/log-in')),
                    catchError((error) => of(adminActions.getFail(error)))
                );
            })
        ),
        { useEffectsErrorHandler: false }
    );

    logInAdmin$: Observable<Action> = createEffect(() => this.actions$ 
        .pipe(
            ofType(adminActions.AuthActionTypes.LOGIN_REQUEST),
            switchMap((admin: Admin) => {
                const { email, password } = admin;
                console.log(admin)
                return this.adminService.logIn(email, password)
                .pipe(
                    map((admin) => {
                        console.log(admin)
                        return adminActions.logInSuccess({ logInAdmin: admin })
                    }),
                    tap((adminToken) => {
                        localStorage.setItem('token', adminToken.logInAdmin.token),
                        this.router.navigateByUrl('/');
                    }),
                    catchError((error) => of(adminActions.getFail(error)))
                )
            })
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private adminService: AdminService,
        private router: Router
    ){ }
}