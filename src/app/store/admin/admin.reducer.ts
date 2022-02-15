import { ActionReducerMap, createReducer, on } from "@ngrx/store";

import { Admin } from "../../interfaces/admin.interface";
import * as adminActions from "./admin.actions";
import AppAdminState from "./admin.state";

export interface AdminState {
    isAuthenticated: boolean; // is a user authenticated?
    admin: Admin | null; // if authenticated, there should be a user object
    errorMessage: string | null; // error message
};

const initialState: AdminState = {
    isAuthenticated: false,
    admin: null,
    errorMessage: null,
};

export const adminReduser = createReducer (
    initialState,
    on(adminActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),
    on(adminActions.createAdminRequest, state => ({
        ...state,
    })),
    on(adminActions.createAdminSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true,
        admin: action.signUpAdmin,
        errorMessage: null,
    }))

);

export const reduserAdmin: ActionReducerMap<AppAdminState> = {
    admin: adminReduser,
};