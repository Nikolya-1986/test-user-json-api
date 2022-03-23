import { Episode, EpisodeDTO } from "src/app/interfaces/episode.interface";
import { UserDTO } from "../../interfaces/user.interface";

export interface UserState {
    userDTO: UserDTO<EpisodeDTO>[],
    userSelected?: UserDTO<EpisodeDTO>,
    loadCouter: number,
    errorMessage: string,
};

export const initialUserState: UserState = {
    userDTO: [],
    loadCouter: 0,
    errorMessage: "",
    userSelected: undefined,
};

export default interface AppUserState {
    user: UserState,
}