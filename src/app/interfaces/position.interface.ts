export interface PositionDTO {
    url: string,
};

export interface Position {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: number[],
    url: string;
};