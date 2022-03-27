import { Position, PositionDTO } from "../../interfaces/position.interface";
import { UserDTO } from "../../interfaces/user.interface";

export interface UserState {
    userDTO: UserDTO<PositionDTO>[],
    userSelected?: UserDTO<PositionDTO>,
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