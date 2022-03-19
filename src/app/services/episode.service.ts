import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Episode, EpisodeDTO, EpisodesDTO } from '../interfaces/episode.interface';

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

  public getEpisodes(): Observable<EpisodesDTO> {
    return this._httpClient.get<EpisodesDTO>(`${this.BASE_URL}/episodes`);
  };

  public getEpisodesUrl(url: string): Observable<Episode> {
    return this._httpClient.get<Episode>(url);
  };

  public getСhangedEpisodes(): Observable<EpisodeDTO[]> {
    return this.getEpisodes().pipe(
     map((data: EpisodesDTO) => {
       const episodes = data.results;
       const episodesConvert = episodes.map(episode => ({
         ...episode,
         users: episode.users.map(userUrl => this.convertUrlToId(userUrl))
       }))
       return episodesConvert;
     }),
    );
  };

  private convertUrlToId<T>(userUrl: T): number {
    const urlSplit = String(userUrl).split('/');// ['https:', '', 'http:', '', 'localhost:3000', 'users', '1']
    const lastIndex = urlSplit.length - 1;//6
    const id = Number(urlSplit[lastIndex]);//1
    return id;
  };

}
