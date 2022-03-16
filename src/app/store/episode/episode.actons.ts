import { createAction, props, union } from "@ngrx/store";
import { EpisodeDTO } from "src/app/interfaces/episode.interface";

export enum EpisodeActionsType {
    GET_FAIL = '[ERROR] Get Fail',
    LOAD_EPISODES_REQUEST = '[EPISODES] Load Episodes Request',
    LOAD_EPISODES_SUCCESS = '[EPISODES] Load Episodes Success',
};

export const getFail = createAction (
    EpisodeActionsType.GET_FAIL,
    props<{ message: string }>(),
);

export const loadEpisodesRequest = createAction (
    EpisodeActionsType.LOAD_EPISODES_REQUEST,
);

export const loadEpisodesSuccess = createAction (
    EpisodeActionsType.LOAD_EPISODES_SUCCESS,
    props<{ episodes: EpisodeDTO[] }>(),
);

const allEpisodeActions = union({
    getFail,
    loadEpisodesRequest,
    loadEpisodesSuccess,
});

export type UserActions = typeof allEpisodeActions;