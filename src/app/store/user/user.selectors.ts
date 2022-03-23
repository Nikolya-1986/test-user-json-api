import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";

export const USER_STATE_NAME = 'user';
export const getUserFeatureSelector = createFeatureSelector<UserState>(USER_STATE_NAME);

export const getIsLoadingSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.loadCouter !== 0,
);

export const getUsers = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.userDTO,
);

export const getUser = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.userSelected,
);

export const getFail = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.errorMessage,
);