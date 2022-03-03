import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { AUTH_STATE_NAME } from "./auth/auth.selector";
import { AuthState } from "./auth/auth.state";
import { AuthReducer } from "./auth/auth.reducer";
// import { UserReducer, UserState } from './user/user.reducer';
// import { USER_STATE_NAME } from './user/user.selectors';
// import AppUserState from './user/user.state';

export interface AppState {
    [AUTH_STATE_NAME]: AuthState;
    // [USER_STATE_NAME]: AppUserState;
    router: RouterReducerState;
};

export const appReducer = {
    [AUTH_STATE_NAME]: AuthReducer,
    // [USER_STATE_NAME]: UserReducer,
    router: routerReducer,
};