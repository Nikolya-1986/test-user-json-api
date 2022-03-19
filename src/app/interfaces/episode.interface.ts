export interface EpisodesDTO {
    results: EpisodeDTO[];
};

export interface EpisodeDTO {
    id: number,
    name: string,
    episode: string,
    users: any[],
    url: string,
    created: string,
};


export interface Episode {
    name: string,
    url: string,
};