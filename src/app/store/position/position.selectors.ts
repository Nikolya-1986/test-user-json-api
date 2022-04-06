import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PositionState } from "./position.state";

export const POSITION_STATE_NAME = 'position';
export const getPositionFeatureState = createFeatureSelector<PositionState>(POSITION_STATE_NAME);

const position = (state: PositionState) => state.position;
const error = (state: PositionState): string => state.errorMessage;

export const getPosition = createSelector (
    getPositionFeatureState,
    position,
);

export const getFail = createSelector (
    getPositionFeatureState,
    error,
);