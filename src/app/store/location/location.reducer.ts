import { Action, createReducer, on } from "@ngrx/store";

import * as fromLocationState from "./location.state";
import * as fromLocationActions from "./location.actions";

const _locationReducerInternal = createReducer (
    fromLocationState.initialLocationState,
    on(fromLocationActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),

    on(fromLocationActions.loadLocationRequest, (state, { id }) => ({
        ...state,
    })),
    on(fromLocationActions.loadLocationSuccess, (state, action) => ({
        ...state,
        location: action.location,
    })),
);

export function locationReducer(state: fromLocationState.LocationState | undefined, action: Action) {
    return _locationReducerInternal(state, action);
};