import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import AppUserState from "./user.state";
import { UserService } from "../../services/user.service";
import * as userActions from "./user.actions";
import { UserDTO } from "src/app/interfaces/user.interface";
import { Router } from "@angular/router";

@Injectable()
export class UsersEffects {

    loadUsers$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USERS_REQUEST),
            switchMap(() => this.userService.getUsers()
                .pipe(
                    map((users) => userActions.loadUsersSuccess({users})),
                    catchError((error) => of(userActions.loadUsersFail(error))),
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    loadUser$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USER_REQUEST),
            switchMap((action: any) => this.userService.getUser(action.userId)
                .pipe(
                    tap((user) => console.log(user)),
                    map(() => userActions.LoadUserSuccess({ user: action.user })),
                    catchError((error) => of(userActions.LoadUserFail(error)))
                )
            )
        ),
        { useEffectsErrorHandler: false }                
    );

    deleteUser$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.DELETE_USER_REQUEST),
            switchMap((action: any) => this.userService.deleteUser(action.userId)
                .pipe(
                    tap(() => this.router.navigate(['/home'])),
                    map(() => userActions.DeleteUserSuccess({ userId: action.userId})),
                    catchError((error) => of(userActions.DeleteUserFail(error))),
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    editUser$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.EDIT_USER_REQUEST),
            switchMap((action: any) => {
                console.log(action);
                return this.userService.editUser(action.userEdit)
                    .pipe(
                        tap(() => this.router.navigate(['/description'])),
                        map(() => userActions.EditUserSuccess({ userEdit: action.userEdit })),
                        catchError((error) => of(userActions.EditUserFail(error)))
                    )
                }
            )
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store: Store<AppUserState>,
        private router: Router
    ){ }
} 