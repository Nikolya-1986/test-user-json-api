import { Location } from "../../interfaces/location.interface";

export interface LocationState {
    location: Location | null,
    errorMessage: string,
};

export const initialLocationState: LocationState = {
    location: null,
    errorMessage: 'Location state is empy',
};

export default interface DefaultLocationState {
    locationState: LocationState,
};
