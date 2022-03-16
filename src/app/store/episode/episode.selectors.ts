import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EpisodeDTO } from "../../interfaces/episode.interface";
import { EpisodeState } from "./episode.state";

export const EPISODE_STATE_NAME = 'episode';
export const getEpisodesFeatureState = createFeatureSelector<EpisodeState>(EPISODE_STATE_NAME);

const getEpisodes = (state: EpisodeState): EpisodeDTO[] => state.episodeDTO;
const getError = (state: EpisodeState): string | null => state.errorMessage;

export const getEpisodesSelector = createSelector (
    getEpisodesFeatureState,
    getEpisodes,
);

export const getFailSelector = createSelector (
    getEpisodesFeatureState,
    getError,
);