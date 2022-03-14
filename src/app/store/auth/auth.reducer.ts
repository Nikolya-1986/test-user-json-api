import { Action, createReducer, on } from "@ngrx/store";

import { AuthState, initialAuthState } from "./auth.state";
import * as fromAuthActions from "./auth.actions";

const _authReducerInternal  = createReducer (
    initialAuthState,
    on(fromAuthActions.signUpSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true,
        auth: action.signUp,
        errorMessage: null,
    })),

    on(fromAuthActions.logInSuccess, (state, action) => ({
        ...state,
        isAuthenticated: true,
        auth: action.logIn,
        errorMessage: null,
    })),

    on(fromAuthActions.getFail, (state, action) => ({
        ...state,
        isAuthenticated: false,
        auth: null,
        errorMessage: action.message,
    })),

    on(fromAuthActions.logOut, (state, {}) => ({
       ...state,
       initialAuthState,
    })),

);

export function authReducer(state: AuthState | undefined, action: Action) {
    return _authReducerInternal (state, action);
}