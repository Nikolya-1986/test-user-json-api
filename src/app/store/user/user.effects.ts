import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Router } from "@angular/router";

import AppUserState from "./user.state";
import { FacadeService } from "src/app/services/facades/facade.service";
import * as fromUserActions from "./user.actions";
import * as fromUserSelectors from "./user.selectors";

@Injectable()
export class UsersEffects {

    loadUsers$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(fromUserActions.UsersActionsType.LOAD_USERS_REQUEST),
            switchMap(() => this._facadeService.getUsers()
                .pipe(
                    map((users) => fromUserActions.loadUsersSuccess({ users })),
                    catchError((error) => of(fromUserActions.getFail(error))),
                ) 
            )
        ),
        { useEffectsErrorHandler: false }
    );

    loadUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(fromUserActions.UsersActionsType.LOAD_USER_REQUEST),
            switchMap((action: any) => this._facadeService.getUser(action.userId)
                .pipe(
                    // map((user) => fromUserActions.loadUserSuccess({ user })),
                    withLatestFrom(
                        this._storeUser.select(fromUserSelectors.getUsers),
                    ),
                    map(([user, users]) => {
                        if (users) {
                            return (fromUserActions.loadUserSuccess({ user }));
                        } else {
                            return { type: 'Empty Action' };
                        }
                    }),
                    catchError((error) => of(fromUserActions.getFail(error)))
                )
            )
        ),
        { useEffectsErrorHandler: false }    
    );

    deleteUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(fromUserActions.UsersActionsType.DELETE_USER_REQUEST),
            switchMap((action: any) => this._facadeService.deleteUser(action.userId)
                .pipe(
                    tap(() => this._router.navigate(['/home'])),
                    map(() => fromUserActions.deleteUserSuccess({ userId: action.userId})),
                    catchError((error) => of(fromUserActions.getFail(error))),
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    editUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(fromUserActions.UsersActionsType.EDIT_USER_REQUEST),
            switchMap((action: any) => {
                console.log(action);
                return this._facadeService.editUser(action.userEdit)
                    .pipe(
                        tap(() => this._router.navigate(['/description'])),
                        map(() => fromUserActions.editUserSuccess({ userEdit: action.userEdit })),
                        catchError((error) => of(fromUserActions.getFail(error)))
                    )
                }
            )
        ),
        { useEffectsErrorHandler: false }
    );

    createUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(fromUserActions.UsersActionsType.CREATE_USER_REQUEST),
            switchMap((action: any) => {
                console.log(action);
                return this._facadeService.createUser(action.userCreate)
                    .pipe(
                        tap(() => this._router.navigate(['/home'])),
                        map(() => fromUserActions.createUserSuccess({ userCreate: action.userCreate })),
                        catchError((error) => of(fromUserActions.getFail(error)))
                    )
                }
            )
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private _actions$: Actions,
        private _facadeService: FacadeService,
        private _storeUser: Store<AppUserState>,
        private _router: Router
    ){ }
} 