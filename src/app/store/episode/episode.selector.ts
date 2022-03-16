import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EpisodeDTO } from "../../interfaces/episode.interface";
import { EpisodeState } from "./episode.state";

export const episodeFeatureName = 'episode';
export const getEpisodesFeatureState = createFeatureSelector<EpisodeState>(episodeFeatureName);

const getEpisodes = (state: EpisodeState): EpisodeDTO[] => state.episodeDTO;

export const getEpisodesSelector = createSelector (
    getEpisodesFeatureState,
    getEpisodes,
);