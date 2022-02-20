import { createAction, props, union } from "@ngrx/store";
import { Admin } from "../../interfaces/admin.interface";

export enum AuthActionTypes {
    GET_FAIL = '[ERROR] Get Fail',
    SIGNUP_REQUEST = '[Auth] Signup Request',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    LOGIN_REQUEST = '[Auth] Login Request',
    LOGIN_SUCCESS = '[Auth] Login Success',
};

export const getFail = createAction (
    AuthActionTypes.GET_FAIL,
    props<{ message: string }>(),
);

export const signUpRequest = createAction (
    AuthActionTypes.SIGNUP_REQUEST,
    props<{ signUpAdmin: any }>(),
);

export const signUpSuccess = createAction (
    AuthActionTypes.SIGNUP_SUCCESS,
    props<{ signUpAdmin: Admin }>(),
);

export const logInRequest = createAction (
    AuthActionTypes.LOGIN_REQUEST,
    props<{ logInAdmin: any }>(),
);

export const logInSuccess = createAction (
    AuthActionTypes.LOGIN_SUCCESS,
    props<{logInAdmin: Admin}>(),
);

const allAdminActions = union({
    getFail,
    signUpRequest,
    signUpSuccess,
    logInRequest,
    logInSuccess,
});

export type AdminActions = typeof allAdminActions