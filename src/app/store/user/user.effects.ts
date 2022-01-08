import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { map, catchError, mergeMap, withLatestFrom, switchMap, tap } from 'rxjs/operators';

import AppUserState from "./user.state";
import { UserService } from "../../services/user.service";
import * as userActions from "./user.actions";
import * as userSelectors from './user.selectors';
import { UserDTO } from "src/app/interfaces/user.interface";
import { Router } from "@angular/router";

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
            mergeMap((action: UserDTO) => this.userService.deleteUser(action.id)
                .pipe(
                    tap(() => this.router.navigate(['/home'])),
                    map(() => userActions.DeleteUserSuccess({ userId: action.id})),
                    catchError((error) => of(userActions.DeleteUserFail(error)))
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store: Store<AppUserState>,
        private router: Router
    ){ }
} 