import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { EPISODE_STATE_NAME } from './episode/episode.selectors';
import { USER_STATE_NAME } from './user/user.selectors';
import { episodeReducer } from './episode/episode.reducer';
import { userReducer } from './user/user.reducer';
import { EpisodeState } from './episode/episode.state';
import { UserState } from './user/user.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    [EPISODE_STATE_NAME]: EpisodeState;
    [USER_STATE_NAME]: UserState;
    router: RouterReducerState;
};

export const appReducer: ActionReducerMap<AppState> = {
    [EPISODE_STATE_NAME]: episodeReducer,
    [USER_STATE_NAME]: userReducer,
    router: routerReducer,
};