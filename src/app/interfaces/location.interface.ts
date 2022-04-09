export interface LocationDTO {
    id: string,
};

export interface Location {
    id: string,
    city: string,
    country: string,
    street: Street,
    postcode: string,
    coordinates: Coordinates,
};

export interface Street {
    number: number,
    name: string
};

export interface Coordinates {
    latitude: string,
    longitude: string,
};

