export interface PositionDTO {
    url: string,
};

export interface Position {
    id: number,
    name: PositionName,
    type: Type,
    dimension: Dimension,
    residents: number[],
    url: string,
};

export enum PositionName {
    Trainee = 'Trainee',
    Junior = 'Junior',
    Midle = 'Midle',
    Senior = 'Senior',
};

export enum Type {
    Cluster = 'Cluster',
    Planet = 'Planet',
    Microverse = 'Microverse',
    Advanced = 'Advanced',
};

export enum Dimension {
    Unknown = 'Unknown',
    Replacement = 'Replacement',
    Cable = 'Cable',
    Interdimensional = 'Interdimensional',
};
