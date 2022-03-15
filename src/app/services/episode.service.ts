import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Episode, EpisodeDTO } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private readonly BASE_URL = 'http://localhost:3000';
  private httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getEpisodes(): Observable<EpisodeDTO[]> {
    return this._httpClient.get<EpisodeDTO[]>(`${this.BASE_URL}\episodes`)
  };

  public getEpisodesForUserId(): Observable<Episode[]> {
    return this.getEpisodes().pipe(
     map(data => {
       const episodes = data.map(episode => ({
         ...episode,
         users: episode.users.map(userUrl => this.convertUrlToId(userUrl))
       }))
       return episodes;
     }),
    );
  };

  private convertUrlToId(userUrl: string): number {
    const urlSplit = userUrl.split('/');
    const lastIndex = urlSplit.length - 1;
    const id = Number(urlSplit[lastIndex]);
    return id;
  };

}
