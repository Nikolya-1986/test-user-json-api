import { createFeatureSelector, createSelector } from "@ngrx/store";

import { LocationState } from "./location.state";

export const LOCATION_STATE_NAME = 'location';
export const getLocationFeatureState = createFeatureSelector<LocationState>(LOCATION_STATE_NAME);

const location = (state: LocationState) => state.location;
const error = (state: LocationState) => state.errorMessage;

export const getLocation = createSelector (
    getLocationFeatureState,
    location,
);

export const getFail = createSelector (
    getLocationFeatureState,
    error,
);