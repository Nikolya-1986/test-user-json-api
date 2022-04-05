import { createAction, props, union } from "@ngrx/store";

import { Location } from "../../interfaces/location.interface";

export enum LocationActionsType {
    GET_FAIL = '[ERROR] Get Fail',
    LOAD_LOCATION_REQUEST = '[LOCATION] Load Location Request',
    LOAD_LOCATION_SUCCESS = '[LOCATION] Load Location Success',
};

export const getFail = createAction (
    LocationActionsType.GET_FAIL,
    props<{ message: string }>(),
);

export const loadLocationRequest = createAction (
    LocationActionsType.LOAD_LOCATION_REQUEST,
    props<{ id: string }>(),
);

export const loadLocationSuccess = createAction (
    LocationActionsType.LOAD_LOCATION_SUCCESS,
    props<{ location: Location }>(),
);

const allLocationActions = union({
    getFail,
    loadLocationRequest,
    loadLocationSuccess,
});

export type LocationActions = typeof allLocationActions;