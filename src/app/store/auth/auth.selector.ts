import { createFeatureSelector, createSelector } from "@ngrx/store";

import *as reduser from "./auth.reducer";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';
const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getAuthSelector = {
    getAuthState,
    auth: reduser.AuthReducer,
};

export const isAuthenticated = createSelector(getAuthState, (state) => {
    return state.auth ? true : false;
});

export const getToken = createSelector(getAuthState, (state) => {
    return state.auth ? state.auth.token : null;
});