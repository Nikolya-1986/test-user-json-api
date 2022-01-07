import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, mergeMap, withLatestFrom } from 'rxjs/operators';

import AppUserState from "./user.state";
import { UserService } from "../../services/user.service";
import * as userActions from "./user.actions";
import * as userSelectors from './user.selectors';

@Injectable()
export class UsersEffects {

    loadUsers$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.LOAD_USERS_REQUEST),
            mergeMap(() => this.userService.getUsers()
                .pipe(
                    withLatestFrom(this.store.select(userSelectors.getUsersSelector)),
                    map(([newUsers, currentUsers]) => {
                        if(currentUsers.length < 1){
                            return (userActions.loadUsersSuccess({users: newUsers}))
                        }else {
                            return {
                                type: 'Empty Action'
                            }
                        }
                    }),
                    catchError((error) => of(userActions.loadUsersFail(error)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    deleteUser$: Observable<Action> = createEffect(() => this.actions$
        .pipe(
            ofType(userActions.UsersActionsType.DELETE_USER_REQUEST),
            mergeMap((id: number) => this.userService.deleteUser(id)
                .pipe(
                    map(() => userActions.DeleteUserSuccess({userId: id})),
                    catchError((error) => of(userActions.DeleteUserFail(error)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store: Store<AppUserState>
    ){ }
} 