import { EpisodeDTO } from "../../interfaces/episode.interface";

export interface EpisodeState {
    episodeDTO: EpisodeDTO[],
    episodeSelected?: EpisodeDTO,
    errorMessage: string | null,
};

export const initialEpisodeState: EpisodeState = {
    episodeDTO: [],
    episodeSelected: undefined,
    errorMessage: null,
};

export default interface AppEpisodeState {
    episodeState: EpisodeState,
};
