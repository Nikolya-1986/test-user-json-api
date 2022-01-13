import { createAction, props, union } from "@ngrx/store";

import { UserDTO } from "../../interfaces/user.interface";

export enum UsersActionsType {
    LOAD_START = '[LOADING] Load Start',
    LOAD_END = '[LOADING] Load End',
    LOAD_USERS_REQUEST = '[USER] Load Users Request',
    LOAD_USERS_SUCCESS = '[USER] Load Users Success',
    LOAD_USERS_FAIL = '[USER] Load Users Fail',
    DELETE_USER_REQUEST = '[USER] Delete User Request',
    DELETE_USER_SUCCESS = '[USER] Delete User Success',
    DELETE_USER_FAIL = '[USER] Delete User Fail',
    EDIT_USER_REQUEST = '[USER] Edit User Request',
    EDIT_USER_SUCCESS = '[USER] Edit User Success',
    EDIT_USER_FAIL = '[USER] Edit User Fail',
};

export const loadStart = createAction (
    UsersActionsType.LOAD_START,
);

export const loadEnd = createAction (
    UsersActionsType.LOAD_END,
);

export const loadUsersRequest = createAction (
    UsersActionsType.LOAD_USERS_REQUEST
);

export const loadUsersSuccess = createAction (
    UsersActionsType.LOAD_USERS_SUCCESS,
    props<{users: UserDTO[]}>(),
);

export const loadUsersFail = createAction (
    UsersActionsType.LOAD_USERS_FAIL,
    props<{message: string}>(),
);

export const DeleteUserRequest = createAction (
    UsersActionsType.DELETE_USER_REQUEST,
    props<{userId: number}>(),
);

export const DeleteUserSuccess = createAction (
    UsersActionsType.DELETE_USER_SUCCESS,
    props<{userId: number}>(),
);

export const DeleteUserFail = createAction (
    UsersActionsType.DELETE_USER_FAIL,
    props<{message: string}>(),
);

export const EditUserRequest = createAction (
    UsersActionsType.EDIT_USER_REQUEST,
    props<({userEdit: UserDTO})>(),
);

export const EditUserSuccess = createAction (
    UsersActionsType.EDIT_USER_SUCCESS,
    props<({userEdit: UserDTO})>(),
);

export const EditUserFail = createAction (
    UsersActionsType.EDIT_USER_FAIL,
    props<({message: string})>(),
);

const allUserActions = union({
    loadStart,
    loadEnd,
    loadUsersRequest,
    loadUsersSuccess,
    loadUsersFail,
    DeleteUserRequest,
    DeleteUserSuccess,
    DeleteUserFail,
    EditUserRequest,
    EditUserSuccess,
    EditUserFail,
});

export type UserActions = typeof allUserActions