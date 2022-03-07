import { createFeatureSelector, createSelector } from "@ngrx/store";

import *as reduser from "./auth.reducer";
import AppAuthState from "./auth.state";

export const AUTH_STATE_NAME = 'auth';
export const getAuthState = createFeatureSelector<AppAuthState>(AUTH_STATE_NAME);

export const getAuthSelector = {
    getAuthState,
    auth: reduser.AuthReducer,
};