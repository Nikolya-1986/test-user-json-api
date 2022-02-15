import { createAction, props, union } from "@ngrx/store";
import { Admin } from "src/app/interfaces/admin.interface";

export enum AuthActionTypes {
    GET_FAIL = '[ERROR] Get Fail',
    SIGNUP_REQUEST = '[Auth] Signup Request',
    SIGNUP_SUCCESS = '[Auth] Signup Success',
};

export const getFail = createAction (
    AuthActionTypes.GET_FAIL,
    props<{message: string}>(),
);

export const createAdminRequest = createAction (
    AuthActionTypes.SIGNUP_REQUEST,
    props<{auth: Admin}>(),
);

export const createAdminSuccess = createAction (
    AuthActionTypes.SIGNUP_SUCCESS,
    props<{auth: Admin}>(),
);

const allAdminActions = union({
    getFail,
    createAdminRequest,
    createAdminSuccess
});

export type AdminActions = typeof allAdminActions