import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { UserState } from "./user.state";
import { EpisodeDTO } from "src/app/interfaces/episode.interface";
import { UserDTO } from "src/app/interfaces/user.interface";
import { PositionDTO } from "src/app/interfaces/position.interface";
import * as fromUserSelectors from "./user.selectors";
import * as fromUserActions from "./user.actions";

@Injectable({ 
    providedIn: 'root' 
})
export class UserStoreFacade {
    
    public isLoading$ = this._storeUser.pipe(select(fromUserSelectors.getIsLoading));
    public getUsers$ = this._storeUser.pipe(select(fromUserSelectors.getUsers)); 
    public getUser$ = this._storeUser.pipe(select(fromUserSelectors.getUser)); 
    public error$ = this._storeUser.pipe(select(fromUserSelectors.getFail));
    
    constructor(
        private _storeUser: Store<UserState>,
    ) {}

    public loadUsers(): void {
        this._storeUser.dispatch(fromUserActions.loadUsersRequest());
    };

    public loadUser(userId: number): void {
        this._storeUser.dispatch(fromUserActions.loadUserRequest({ userId }));
    };

    public deleteUser(userId: number): void {
        this._storeUser.dispatch(fromUserActions.deleteUserRequest({ userId }));
    };

    public editUser(userEdit: UserDTO<EpisodeDTO>): void {
        this._storeUser.dispatch(fromUserActions.editUserRequest({ userEdit }));
    };

    public createUser(userCreate: UserDTO<PositionDTO>): void {
        this._storeUser.dispatch(fromUserActions.createUserRequest({ userCreate }));
    };

}