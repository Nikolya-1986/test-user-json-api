import { Auth } from "../../interfaces/auth.interface";

export interface AuthState {
    isAuthenticated: boolean; // is a user authenticated?
    auth: Auth | null; // if authenticated, there should be a user object
    errorMessage: string | null; // error message
};

export const initialAuthState: AuthState = {
    isAuthenticated: false,
    auth: null,
    errorMessage: null,
};

export default interface AppAuthState {
    authState: AuthState,
};