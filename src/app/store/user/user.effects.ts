import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { combineLatest, forkJoin, Observable, of } from "rxjs";
import { map, catchError, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Router } from "@angular/router";

import { FacadeService } from "../../services/facades/facade.service";
import AppUserState from "./user.state";
import * as fromUserActions from "./user.actions";
import * as fromPositionActions from "../position/position.actions";
import * as fromLocationActions from "../location/location.actions";
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

    // loadUser$: Observable<Action> = createEffect(() => this._actions$
    //     .pipe(
    //         ofType(fromUserActions.UsersActionsType.LOAD_USER_REQUEST),
    //         switchMap((action: any) => this._facadeService.getUser(action.userId)
    //             .pipe(
    //                 withLatestFrom(
    //                     this._storeUser.select(fromUserSelectors.getUsers),
    //                 ),
    //                 map(([user, users]) => {
    //                     console.log(users);
    //                     console.log(user);
    //                     if (users) {
    //                         return (fromUserActions.loadUserSuccess({ user }));
    //                     } else {
    //                         return { type: 'Empty Action' };
    //                     }
    //                 }),
    //                 catchError((error) => of(fromUserActions.getFail(error)))
    //             )
    //         )
    //     ),
    //     { useEffectsErrorHandler: false }    
    // );

    loadUser$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(fromUserActions.UsersActionsType.LOAD_USER_REQUEST),
            concatLatestFrom(() => this._storeUser.select(fromUserSelectors.getUser)),
            switchMap(([action, user]: any) => {
                return this._facadeService.getUser(action.userId)
                .pipe(
                    map((user) => {
                        return fromUserActions.loadUserSuccess({ user })
                    }),
                    tap((user) => console.log(user)),
                    catchError((error) => of(fromUserActions.getFail(error)))
                )
            })
        ),
        { useEffectsErrorHandler: false } 
    );
    
    // loadUser$: Observable<Action> = createEffect(() => this._actions$
    //     .pipe(
    //         ofType(fromUserActions.UsersActionsType.LOAD_USER_REQUEST),
    //         switchMap((action: any) => {
    //             return this._facadeService.getUser(action.userId)
    //             .pipe(
    //                 switchMap((user) => {
    //                     const getUser$ = of(user);
    //                     const getPosition$ = this._facadeService.getUserPosition(user.position.url);
    //                     const getLocation$ = this._facadeService.getUserLocation(user.location.id);
    //                     return forkJoin([getUser$, getPosition$, getLocation$]);
    //                 }),
    //                 switchMap(([user, position, location]) => {
    //                     const userAdditional = {
    //                         ...user,
    //                         position,
    //                         location
    //                     }
    //                     console.log(userAdditional);
    //                     return [
    //                         fromUserActions.loadUserSuccess({ user }),
    //                         fromPositionActions.loadPositionSuccess({ position }),
    //                         fromLocationActions.loadLocationSuccess({ location })
    //                     ]
    //                 }),
    //                 catchError((error) => of(fromUserActions.getFail(error)))
    //             )
    //         })
    //     ),
    //     { useEffectsErrorHandler: false } 
    // );

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