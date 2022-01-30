export interface UsersDTO {
    results: UserDTO[],
};

export interface UserDTO {
    id: number,
    gender: Gender,
    status: Status,
    name: Name,
    location: Location,
    email: string,
    website: string,
    language: string[],
    available: boolean,
    login: Login,
    dob: Dob,
    registered: Registered,
    phone: string,
    cell: string,
    picture: Picture[],
    nat: string,
};

export enum Gender {
    female = 'female',
    male = 'male',
    all = 'all',
};

export enum Status {
    married ='married',
    divorced = 'divorced',
    single ='single',
    all = 'all'
}

export interface Name {
    title: string,
    first: string,
    last: string,
};

export enum Appeal {
    Mr = 'Mr',
    Ms = 'Ms',
    Mrs = 'Mrs',
    Miss = 'Miss'
};

export interface Location {
    street: Street,
    city: string,
    state: string,
    country: string,
    postcode: string,
    coordinates: Coordinates,
    timezone: Timezone,
};

export interface Street {
    number: number,
    name: string
};

export interface Coordinates {
    latitude: string,
    longitude: string,
};

export interface Timezone {
    offset: string,
    description: string,
};

export interface Login {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
};

export interface Dob {
    date: string,
    age: number,
};

export interface Registered {
    date: string;
    age: number,
};

export interface Picture {
    src: string,
};
