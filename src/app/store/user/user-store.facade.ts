import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { UserState } from "./user.state";
import { UserDTO } from "../../interfaces/user.interface";
import { PositionDTO } from "../../interfaces/position.interface";
import { LocationDTO } from "../../interfaces/location.interface";
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

    public editUser(userEdit: UserDTO<PositionDTO, LocationDTO>): void {
        this._storeUser.dispatch(fromUserActions.editUserRequest({ userEdit }));
    };

    public createUser(userCreate: UserDTO<PositionDTO, LocationDTO>): void {
        this._storeUser.dispatch(fromUserActions.createUserRequest({ userCreate }));
    };

}