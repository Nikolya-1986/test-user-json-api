import { Action, createReducer, on } from "@ngrx/store";

import * as adminActions from "./auth.actions";
import { AuthState, initialState } from "./auth.state";

const _authReducer = createReducer (
    initialState,
    on(adminActions.signUpSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true,
        auth: action.signUp,
        errorMessage: null,
    })),
    on(adminActions.getFail, (state, action) => ({
        ...state,
        // errorMessage: 'That email is already in use.',
        errorMessage: action.message,
    })),

    on(adminActions.logInSuccess, (state, action) => {
        console.log(action.logIn);
        return {
            ...state,
            isAuthenticated: true,
            auth: action.logIn,
            errorMessage: null,
        }
    }),
    on(adminActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
        // errorMessage: 'Incorrect email and/or password.',
    })),

);

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}