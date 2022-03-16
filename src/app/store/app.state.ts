import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { episodeReducer } from './episode/episode.reducer';
import { episodeFeatureName } from './episode/episode.selector';
import { EpisodeState } from './episode/episode.state';

export interface AppState {
    [episodeFeatureName]: EpisodeState;
    router: RouterReducerState;
};

export const appReducer = {
    [episodeFeatureName]: episodeReducer,
    router: routerReducer,
};