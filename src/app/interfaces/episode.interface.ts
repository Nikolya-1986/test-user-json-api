export interface EpisodesDTO {
    results: EpisodeDTO[];
};

export interface EpisodeDTO {
    id: number,
    name: string,
    episode: string,
    users: string[],
    url: string,
    created: string,
};

export interface Episode {
    id: number,
    name: string,
    episode: string,
    users: number[],
    url: string,
    created: string,
};