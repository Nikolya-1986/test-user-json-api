import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Auth } from "src/app/interfaces/auth.interface";
import { AuthState }  from "./auth.state";

export const authFeatureName = 'auth';
export const getAuthFeatureState = createFeatureSelector<AuthState>(authFeatureName);

const getIsAuthenticated = (state: AuthState): boolean => {
    console.log(state)
    return state.isAuthenticated
};
const getAdmin = (state: AuthState): Auth | null => state.auth;
const getErrorMessage = (state: AuthState): string | null => state.errorMessage;

export const selectIsAuthenticated = createSelector(
    getAuthFeatureState,
    getIsAuthenticated,
);

export const selectAuthAdmin = createSelector(
    getAuthFeatureState,
    getAdmin,
);

export const selectAuthErrorMessage = createSelector(
    getAuthFeatureState,
    getErrorMessage,
);