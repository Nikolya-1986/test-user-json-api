import { ActionReducerMap, createReducer, on } from "@ngrx/store";

import { UserDTO } from "src/app/interfaces/user.interface";
import * as userActions from "./user.actions";
import AppUserState from "./user.state";

export interface UserState {
    userDTO: UserDTO[],
    loadCouter: number,
    errorMessage: string
};

const initialstate: UserState = {
    userDTO: [],
    loadCouter: 0,
    errorMessage: ""
};

export const userReduser = createReducer (
    initialstate,
    on(userActions.loadStart, state => ({
        ...state,
        loadCouter: state.loadCouter + 1
    })),
    on(userActions.loadEnd, state => ({
        ...state,
        loadCouter: state.loadCouter - 1
    })),
    on(userActions.loadUsersRequest, state => ({
        ...state
    })),
    on(userActions.loadUsersSuccess, (state, action) => ({
        ...state,
        userDTO: [...state.userDTO, ...action.users]
    })),
    on(userActions.loadUsersFail, (state, action) => ({
        ...state,
        errorMessage: action.message
    }))
);

export const reduserUser: ActionReducerMap<AppUserState> = {
    users: userReduser
}