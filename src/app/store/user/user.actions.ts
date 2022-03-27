import { createAction, props, union } from "@ngrx/store";
import { Position, PositionDTO } from "../../interfaces/position.interface";

import { UserDTO } from "../../interfaces/user.interface";

export enum UsersActionsType {
    LOAD_START = '[LOADING] Load Start',
    LOAD_END = '[LOADING] Load End',
    GET_FAIL = '[ERROR] Get Fail',
    LOAD_USERS_REQUEST = '[USERS] Load Users Request',
    LOAD_USERS_SUCCESS = '[USERS] Load Users Success',
    LOAD_USER_REQUEST = '[USER] Load User Request',
    LOAD_USER_SUCCESS = '[USER] Load User Success',
    DELETE_USER_REQUEST = '[USER] Delete User Request',
    DELETE_USER_SUCCESS = '[USER] Delete User Success',
    EDIT_USER_REQUEST = '[USER] Edit User Request',
    EDIT_USER_SUCCESS = '[USER] Edit User Success',
    CREATE_USER_REQUEST = '[USER] Create User Request',
    CREATE_USER_SUCCESS = '[USER] Create User Success',
};

export const loadStart = createAction (
    UsersActionsType.LOAD_START,
);

export const loadEnd = createAction (
    UsersActionsType.LOAD_END,
);

export const getFail = createAction (
    UsersActionsType.GET_FAIL,
    props<{message: string}>(),
);

export const loadUsersRequest = createAction (
    UsersActionsType.LOAD_USERS_REQUEST
);

export const loadUsersSuccess = createAction (
    UsersActionsType.LOAD_USERS_SUCCESS,
    props<{ users: UserDTO<PositionDTO>[] }>(),
);

export const loadUserRequest = createAction (
    UsersActionsType.LOAD_USER_REQUEST,
    props<{ userId: number }>(),
);

export const loadUserSuccess = createAction (
    UsersActionsType.LOAD_USER_SUCCESS,
    props<{ user: UserDTO<PositionDTO> }>(),
);

export const deleteUserRequest = createAction (
    UsersActionsType.DELETE_USER_REQUEST,
    props<{ userId: number }>(),
);

export const deleteUserSuccess = createAction (
    UsersActionsType.DELETE_USER_SUCCESS,
    props<{ userId: number }>(),
);

export const editUserRequest = createAction (
    UsersActionsType.EDIT_USER_REQUEST,
    props<({ userEdit: UserDTO<PositionDTO> })>(),
);

export const editUserSuccess = createAction (
    UsersActionsType.EDIT_USER_SUCCESS,
    props<({ userEdit: UserDTO<PositionDTO> })>(),
);

export const createUserRequest = createAction (
    UsersActionsType.CREATE_USER_REQUEST,
    props<{ userCreate: UserDTO<PositionDTO> }>(),
);

export const createUserSuccess = createAction (
    UsersActionsType.CREATE_USER_SUCCESS,
    props<{ userCreate: UserDTO<PositionDTO> }>(),
);

const allUserActions = union({
    loadStart,
    loadEnd,
    getFail,
    loadUsersRequest,
    loadUsersSuccess,
    loadUserRequest,
    loadUserSuccess,
    deleteUserRequest,
    deleteUserSuccess,
    editUserRequest,
    editUserSuccess,
    createUserRequest,
    createUserSuccess,
});

export type UserActions = typeof allUserActions