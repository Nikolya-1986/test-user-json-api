import { createFeatureSelector, createSelector } from "@ngrx/store";

import { LocationState } from "./location.state";

export const LOCATION_STATE_NAME = 'location';
export const getLocationFeatureState = createFeatureSelector<LocationState>(LOCATION_STATE_NAME);

export const getLocation = createSelector (
    getLocationFeatureState,
    (state: LocationState) => state.location,
);

export const getFail = createSelector (
    getLocationFeatureState,
    (state: LocationState) => state.errorMessage,
);