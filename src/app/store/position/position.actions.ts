import { createAction, props, union } from "@ngrx/store";

import { Position } from "../../interfaces/position.interface";

export enum PositionActionsType {
    GET_FAIL = '[ERROR] Get Fail',
    LOAD_POSITION_REQUEST = '[POSITION] Load Position Request',
    LOAD_POSITION_SUCCESS = '[POSITION] Load Position Success',
};

export const getFail = createAction (
    PositionActionsType.GET_FAIL,
    props<{ message: string }>(),
);

export const loadPositionRequest = createAction (
    PositionActionsType.LOAD_POSITION_REQUEST,
    props<{ url: string }>(),
);

export const loadPositionSuccess = createAction (
    PositionActionsType.LOAD_POSITION_SUCCESS,
    props<{ position: Position }>(),
);

const allPositionActions = union({
    getFail,
    loadPositionRequest,
    loadPositionSuccess,
});

export type PositionActions = typeof allPositionActions;