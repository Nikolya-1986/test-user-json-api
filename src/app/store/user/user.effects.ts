import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, mergeMap } from 'rxjs/operators';

import { UserService } from "src/app/services/user.service";
import * as userActions from "./user.actions";

@Injectable()
export class UsersEffects {

    loadUsers$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USERS_REQUEST),
            mergeMap(() => this.userService.getUsers()
                .pipe(
                    map((usersSuccess) => {
                        console.log("Users Success:", usersSuccess);
                        return (userActions.loadUsersSuccess({users: usersSuccess}))
                    }),
                    catchError((error) => of(userActions.loadUsersFail(error)))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ){ }
} 