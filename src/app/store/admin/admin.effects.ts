import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";

import { AdminService } from "../../services/admin.service";
import * as adminActions from "../admin/admin.actions"

@Injectable()
export class AdminEffect {

    signUpAdmin$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(adminActions.AuthActionTypes.SIGNUP_REQUEST),
            switchMap((admin: any) => this.adminService.signUp(admin.lastname, admin.firstName, admin.emal, admin.password)
                .pipe(
                    map((admin) => adminActions.createAdminSuccess({ auth: admin })),
                    catchError((error) => of(adminActions.getFail(error))),
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private adminService: AdminService,
        private router: Router
    ){ }

}