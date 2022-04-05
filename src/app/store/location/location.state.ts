import { Location } from "../../interfaces/location.interface";

export interface LocationState {
    location: Location | undefined,
    errorMessage: string | null,
};

export const initialLocationState: LocationState = {
    location: undefined,
    errorMessage: null,
};

export default interface AppLocationState {
    locationState: LocationState,
};
