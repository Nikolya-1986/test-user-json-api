import { createFeatureSelector, createSelector } from "@ngrx/store";

import { UserState } from "./user.reducer";

export const getUserFeatureSelector = createFeatureSelector<UserState>('users');

export const getIsLoadingSelector = createSelector (
    getUserFeatureSelector,
    (users: UserState) => users.loadCouter !== 0
);

export const getUsersSelector = createSelector (
    getUserFeatureSelector,
    (users: UserState) => users.usersDTO
);

export const getUserSelector = (userId: number) => createSelector (
    getUserFeatureSelector,
    (users: UserState) => users.usersDTO.filter(user => user.id === userId)
);

export const getFailSelector = createSelector (
    getUserFeatureSelector,
    (users: UserState) => users.errorMessage
)