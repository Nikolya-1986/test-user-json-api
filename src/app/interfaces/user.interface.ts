import { LocationDTO } from "./location.interface";
import { PositionDTO } from "./position.interface";

export interface UsersDTO {
    results: UserDTO<PositionDTO, LocationDTO>[],
};

export interface UserDTO<P, L> {
    id: number,
    gender: Gender,
    status: Status,
    name: Name,
    position: P,
    location: L,
    email: string,
    website: string,
    language: string[],
    available: boolean,
    login: Login,
    dob: string,
    registered: string,
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

export interface Login {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
};

export interface Picture {
    src: string,
};
