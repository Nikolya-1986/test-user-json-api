export interface EpisodesDTO {
    results: EpisodeDTO[];
};

export interface EpisodeDTO {
    id: number,
    name: string,
    track: string,
    users: any[],
    url: string,
    created: string,
    completed: string,
};
