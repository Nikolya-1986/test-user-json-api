import { Action, createReducer, on } from "@ngrx/store";

import * as fromPositionState from "./position.state";
import * as fromPositionActions from "./position.actions";

const _positionReducerInternal = createReducer (
    fromPositionState.initialPositionState,
    on(fromPositionActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),

    on(fromPositionActions.loadPositionRequest, (state, { url }) => ({
        ...state,
    })),
    on(fromPositionActions.loadPositionSuccess, (state, action) => ({
        ...state,
        position: action.position,
    })),
);

export function positionReducer(state: fromPositionState.PositionState | undefined, action: Action) {
    return _positionReducerInternal(state, action);
};