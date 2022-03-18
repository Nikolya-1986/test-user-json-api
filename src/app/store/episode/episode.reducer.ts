import { Action, createReducer, on } from "@ngrx/store";
import * as fromEpisodeActions from "./episode.actions";
import { EpisodeState, initialEpisodeState } from "./episode.state";

const _episodeReducerInternal = createReducer (
    initialEpisodeState,
    on(fromEpisodeActions.getFail, (state, action) => ({
        ...state,
        errorMessage: action.message,
    })),

    on(fromEpisodeActions.loadEpisodesRequest, (state) => ({
        ...state,
    })),
    on(fromEpisodeActions.loadEpisodesSuccess, (state, action) => ({
        ...state,
        episodeDTO: [...action.episodes],
    })),
);

export function episodeReducer(state: EpisodeState | undefined, action: Action) {
    return _episodeReducerInternal(state, action);
};