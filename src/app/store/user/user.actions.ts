import { createAction, props, union } from "@ngrx/store";
import { UserDTO } from "src/app/interfaces/user.interface";

export enum UsersActionsType {
    LOAD_START = '[LOADING] Load Start',
    LOAD_END = '[LOADING] Load End',
    LOAD_USERS_REQUEST = '[USER] Load Users Request',
    LOAD_USERS_SUCCESS = '[USER] Load Users Success',
    LOAD_USERS_FAIL = '[USER] Load Users Fail'
};

export const loadStart = createAction (
    UsersActionsType.LOAD_START
);

export const loadEnd = createAction (
    UsersActionsType.LOAD_END
);

export const loadUsersRequest = createAction (
    UsersActionsType.LOAD_USERS_REQUEST
);

export const loadUsersSuccess = createAction (
    UsersActionsType.LOAD_USERS_SUCCESS,
    props<{users: UserDTO[]}>()
);

export const loadUsersFail = createAction (
    UsersActionsType.LOAD_USERS_FAIL,
    props<{error: string}>()
);

const allUserActions = union({
    loadStart,
    loadEnd,
    loadUsersRequest,
    loadUsersSuccess,
    loadUsersFail
});

export type UserActions = typeof allUserActions