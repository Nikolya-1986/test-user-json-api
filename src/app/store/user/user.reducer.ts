import { ActionReducerMap, createReducer, on } from "@ngrx/store";

import { UserDTO } from "src/app/interfaces/user.interface";
import * as userActions from "./user.actions";
import AppUserState from "./user.state";

export interface UserState {
    userDTO: UserDTO[],
    userSelected?: UserDTO,
    loadCouter: number,
    errorMessage: string,
};

const initialstate: UserState = {
    userDTO: [],
    loadCouter: 0,
    errorMessage: "",
    userSelected: undefined,
};

const _userReduser = createReducer (
    initialstate,
    on(userActions.loadStart, state => ({
        ...state,
        loadCouter: state.loadCouter + 1,
    })),
    on(userActions.loadEnd, state => ({
        ...state,
        loadCouter: state.loadCouter - 1,
    })),
    on(userActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),
    on(userActions.loadUsersRequest, state => ({
        ...state
    })),
    on(userActions.loadUsersSuccess, (state, action) => ({
        ...state,
        userDTO: [...action.users],
    })),
    on(userActions.loadUserRequest, (state, { userId }) => ({
        ...state,
    })),
    on(userActions.loadUserSuccess, (state, { user }) => ({
        ...state,
        userSelected: user,
    })),
    on(userActions.deleteUserRequest, state => ({
        ...state,
    })),
    on(userActions.deleteUserSuccess, (state, {userId}) => {
        const userIndes = state.userDTO.findIndex((item) => item.id === userId);
        const otherUsers = [...state.userDTO];
        otherUsers.splice(userIndes, 1);
        return {
            ...state,
            userDTO: otherUsers,
        }
    }),
    on(userActions.editUserRequest, (state, { userEdit }) => ({
        ...state,
    })),
    on(userActions.editUserSuccess, (state, { userEdit }) => {
        const userIndexEdit = state.userDTO.findIndex(index => index.id === userEdit.id);
        const editUser = [...state.userDTO];
        editUser[userIndexEdit] = userEdit;
        return {
            ...state,
            userDTO: editUser
        }
    }),
    on(userActions.createUserRequest, (state, { userCreate }) => ({
        ...state,
    })),
    on(userActions.createUserSuccess, (state, { userCreate }) => ({
        ...state,
        userDTO: [userCreate, ...state.userDTO]
    })),
);

export const UserReducer: ActionReducerMap<AppUserState> = {
    user: _userReduser,
}