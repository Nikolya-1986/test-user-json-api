import { Auth } from "../../interfaces/auth.interface";

export interface AuthState {
    isAuthenticated: boolean; // is a user authenticated?
    admin: Auth | null; // if authenticated, there should be a user object
    errorMessage: string | null; // error message
};

export const initialState: AuthState = {
    isAuthenticated: false,
    admin: null,
    errorMessage: null,
};

export default interface AppAuthState {
    auth: AuthState,
}