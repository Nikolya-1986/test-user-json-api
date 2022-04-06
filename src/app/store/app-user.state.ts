import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { USER_STATE_NAME } from './user/user.selectors';
import { POSITION_STATE_NAME } from './position/position.selectors';
import { LOCATION_STATE_NAME } from './location/location.selectors';
import { userReducer } from './user/user.reducer';
import { positionReducer } from './position/position.reducer';
import { locationReducer } from './location/location.reducer';
import { UserState } from './user/user.state';
import { PositionState } from './position/position.state';
import { LocationState } from './location/location.state';

export interface AppState {
    [USER_STATE_NAME]: UserState;
    [POSITION_STATE_NAME]: PositionState;
    [LOCATION_STATE_NAME]: LocationState;
    router: RouterReducerState;
};

export const appReducer: ActionReducerMap<AppState> = {
    [USER_STATE_NAME]: userReducer,
    [POSITION_STATE_NAME]: positionReducer,
    [LOCATION_STATE_NAME]: locationReducer,
    router: routerReducer,
};