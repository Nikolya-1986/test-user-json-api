import { UserDTO } from "src/app/interfaces/user.interface";

export interface UserState {
    userDTO: UserDTO[],
    userSelected?: UserDTO,
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