import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PositionState } from "./position.state";

export const POSITION_STATE_NAME = 'position';
export const getPositionFeatureState = createFeatureSelector<PositionState>(POSITION_STATE_NAME);

export const getPosition = createSelector (
    getPositionFeatureState,
    (state: PositionState) => state.position,
);

export const getFail = createSelector (
    getPositionFeatureState,
    (state: PositionState) => state.errorMessage,
);