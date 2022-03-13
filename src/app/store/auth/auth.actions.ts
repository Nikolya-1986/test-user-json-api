import { createAction, props, union } from "@ngrx/store";
import { Auth } from "../../interfaces/auth.interface";

export enum AuthActionTypes {
    GET_FAIL = '[ERROR] Get Fail',
    SIGNUP_REQUEST = '[Auth] Signup Request',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
    LOGIN_REQUEST = '[Auth] Login Request',
    LOGIN_SUCCESS = '[Auth] Login Success',
    LOGOUT = '[Auth] Logout',
};

export const getFail = createAction (
    AuthActionTypes.GET_FAIL,
    props<{ message: string }>(),
);

export const signUpRequest = createAction (
    AuthActionTypes.SIGNUP_REQUEST,
    props<{ lastName: string, firstName: string, email: string; password: string }>(),
);

export const signUpSuccess = createAction (
    AuthActionTypes.SIGNUP_SUCCESS,
    props<{ signUp: Auth }>(),
);

export const logInRequest = createAction (
    AuthActionTypes.LOGIN_REQUEST,
    props<{ email: string; password: string }>(), 
);

export const logInSuccess = createAction (
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ logIn: Auth }>(),
);

export const logOut = createAction (
    AuthActionTypes.LOGOUT,
);

const allAdminActions = union({
    getFail,
    signUpRequest,
    signUpSuccess,
    logInRequest,
    logInSuccess,
    logOut,
});

export type AdminActions = typeof allAdminActions