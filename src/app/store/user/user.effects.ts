import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Router } from "@angular/router";

import AppUserState from "./user.state";
import * as userActions from "./user.actions";
import * as fromUserSelectors from "./user.selectors";
import { FacadeService } from "src/app/services/facades/facade.service";
import { Position } from "src/app/interfaces/position.interface";
import { UserDTO } from "src/app/interfaces/user.interface";

@Injectable()
export class UsersEffects {

    loadUsers$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USERS_REQUEST),
            switchMap(() => this._facadeService.getUsers()
                .pipe(
                    map((users) => userActions.loadUsersSuccess({ users })),
                    catchError((error) => of(userActions.getFail(error))),
                ) 
            )
        ),
        { useEffectsErrorHandler: false }
    );

    loadUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USER_REQUEST),
            switchMap((action: any) => this._facadeService.getUser(action.userId)
                .pipe(
                    withLatestFrom(
                        this._store.select(fromUserSelectors.getUsers),
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

    deleteUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(userActions.UsersActionsType.DELETE_USER_REQUEST),
            switchMap((action: any) => this._facadeService.deleteUser(action.userId)
                .pipe(
                    tap(() => this._router.navigate(['/home'])),
                    map(() => userActions.deleteUserSuccess({ userId: action.userId})),
                    catchError((error) => of(userActions.getFail(error))),
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    editUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(userActions.UsersActionsType.EDIT_USER_REQUEST),
            switchMap((action: any) => {
                console.log(action);
                return this._facadeService.editUser(action.userEdit)
                    .pipe(
                        tap(() => this._router.navigate(['/description'])),
                        map(() => userActions.editUserSuccess({ userEdit: action.userEdit })),
                        catchError((error) => of(userActions.getFail(error)))
                    )
                }
            )
        ),
        { useEffectsErrorHandler: false }
    );

    createUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(userActions.UsersActionsType.CREATE_USER_REQUEST),
            switchMap((action: any) => {
                console.log(action);
                return this._facadeService.createUser(action.userCreate)
                    .pipe(
                        tap(() => this._router.navigate(['/home'])),
                        map(() => userActions.createUserSuccess({ userCreate: action.userCreate })),
                        catchError((error) => of(userActions.getFail(error)))
                    )
                }
            )
        )
    );

    constructor(
        private _actions$: Actions,
        private _facadeService: FacadeService,
        private _store: Store<AppUserState>,
        private _router: Router
    ){ }
} 