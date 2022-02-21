import { Action, createReducer, on } from "@ngrx/store";

import * as adminActions from "./auth.actions";
import { AuthState, initialState } from "./auth.state";

const _authReducer = createReducer (
    initialState,
    on(adminActions.signUpSuccess, (state, { signUpAdmin }) => {
        console.log(signUpAdmin);
        return {
            ...state,
            isAuthenticated: true,
            admin: signUpAdmin,
            errorMessage: null,
        }
    }),
    on(adminActions.getFail, (state, action) => ({
        ...state,
        errorMessage: 'That email is already in use.',
    })),

    on(adminActions.logInSuccess, (state, { logInAdmin }) => {
        console.log(logInAdmin);
        return {
            ...state,
            isAuthenticated: true,
            admin: logInAdmin,
            errorMessage: null,
        }
    }),
    on(adminActions.getFail, (state, action) => ({
        ...state,
        errorMessage: 'Incorrect email and/or password.',
    })),

);

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}