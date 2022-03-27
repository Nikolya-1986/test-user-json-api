import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EpisodeDTO } from "../../interfaces/episode.interface";
import { EpisodeState } from "./episode.state";

export const EPISODE_STATE_NAME = 'episode';
export const getEpisodesFeatureState = createFeatureSelector<EpisodeState>(EPISODE_STATE_NAME);

const episodes = (state: EpisodeState): EpisodeDTO[] => state.episodeDTO;
const getError = (state: EpisodeState): string | null => state.errorMessage;

export const getEpisodes = createSelector (
    getEpisodesFeatureState,
    episodes,
);

export const getFail = createSelector (
    getEpisodesFeatureState,
    getEpisodes,
);