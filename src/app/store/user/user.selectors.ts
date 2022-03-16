import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";

export const USER_STATE_NAME = 'user';
export const getUserFeatureSelector = createFeatureSelector<UserState>(USER_STATE_NAME);

export const getIsLoadingSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.loadCouter !== 0,
);

export const getUsersSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.userDTO,
);

export const getUserSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.userSelected,
);

export const getFailSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.errorMessage,
)