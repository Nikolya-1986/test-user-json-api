import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserState } from "./user.reducer";

export const getUserFeatureSelector = createFeatureSelector<UserState>('users');

export const getIsLoadingSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.loadCouter !== 0,
);

export const getUsersSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.userDTO,
);

export const getUserSelector = (userId: number) => createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.userDTO.find(user => user.id === userId),
);

export const getFailSelector = createSelector (
    getUserFeatureSelector,
    (state: UserState) => state.errorMessage,
)