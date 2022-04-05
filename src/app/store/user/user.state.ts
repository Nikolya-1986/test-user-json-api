import { LocationDTO } from "../../interfaces/location.interface";
import { PositionDTO } from "../../interfaces/position.interface";
import { UserDTO } from "../../interfaces/user.interface";

export interface UserState {
    userDTO: UserDTO<PositionDTO, LocationDTO>[],
    userSelected?: UserDTO<PositionDTO, LocationDTO>,
    loadCouter: number,
    errorMessage: string, 
};

export const initialUserState: UserState = {
    userDTO: [],
    userSelected: undefined,
    loadCouter: 0,
    errorMessage: "",
};

export default interface AppUserState {
    user: UserState,
}