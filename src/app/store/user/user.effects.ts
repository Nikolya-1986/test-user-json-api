import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Router } from "@angular/router";

import AppUserState from "./user.state";
import { UserService } from "../../services/user.service";
import * as userActions from "./user.actions";
import { getUsersSelector } from "./user.selectors";

@Injectable()
export class UsersEffects {

    loadUsers$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USERS_REQUEST),
            switchMap(() => this.userService.getUsers()
                .pipe(
                    map((users) => userActions.loadUsersSuccess({users})),
                    catchError((error) => of(userActions.getFail(error))),
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
                    withLatestFrom(
                        this.store.select(getUsersSelector),
                    ),
                    map(([user, users]) => {
                        if (users) {
                            return (userActions.loadUserSuccess({ user }));
                        } else {
                            return { type: 'Empty Action' };
                        }
                    }),
                    catchError((error) => of(userActions.getFail(error)))
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
                    map(() => userActions.deleteUserSuccess({ userId: action.userId})),
                    catchError((error) => of(userActions.getFail(error))),
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
                        map(() => userActions.editUserSuccess({ userEdit: action.userEdit })),
                        catchError((error) => of(userActions.getFail(error)))
                    )
                }
            )
        ),
        { useEffectsErrorHandler: false }
    );

    createUser$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.CREATE_USER_REQUEST),
            switchMap((action: any) => {
                console.log(action);
                return this.userService.createUser(action.userCreate)
                    .pipe(
                        tap(() => this.router.navigate(['/home'])),
                        map(() => userActions.createUserSuccess({ userCreate: action.userCreate })),
                        catchError((error) => of(userActions.getFail(error)))
                    )
                }
            )
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store: Store<AppUserState>,
        private router: Router
    ){ }
} 