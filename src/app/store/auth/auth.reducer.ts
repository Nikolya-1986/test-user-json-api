import { Action, createReducer, on } from "@ngrx/store";

import * as authActions from "./auth.actions";
import { AuthState, initialState } from "./auth.state";

const _authReducer = createReducer (
    initialState,
    on(authActions.signUpSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true,
        auth: action.signUp,
        errorMessage: null,
    })),

    on(authActions.logInSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true,
        auth: action.logIn,
        errorMessage: null,
    })),

    on(authActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),

    on(authActions.logOut, () => {
        return initialState;
    }),

    on(authActions.getStatus, (state) => ({
        ...state,
    })),

);

export function AuthReducer(state: AuthState | undefined, action: Action) {
    return _authReducer(state, action);
}