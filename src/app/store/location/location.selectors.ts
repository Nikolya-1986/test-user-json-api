import { createFeatureSelector, createSelector } from "@ngrx/store";

import { Location } from "../../interfaces/location.interface";
import { LocationState } from "./location.state";

export const LOCATION_STATE_NAME = 'location';
export const getLocationFeatureState = createFeatureSelector<LocationState>(LOCATION_STATE_NAME);

const location = (state: LocationState): Location | any => state.location;
const error = (state: LocationState): string | null => state.errorMessage;

export const getLocation = createSelector (
    getLocationFeatureState,
    location,
);

export const getFail = createSelector (
    getLocationFeatureState,
    error,
);