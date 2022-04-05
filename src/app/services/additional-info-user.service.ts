import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Position } from '../interfaces/position.interface';
import { Location } from "../interfaces/location.interface";

@Injectable({
  providedIn: 'root'
})
export class AdditionalInfoUserService {

  private readonly BASE_URL = 'http://localhost:3000';

  constructor(
    private _httpClient: HttpClient,
  ) { }

  public getUserPosition(url: string): Observable<Position> {
    return this._httpClient.get<Position>(url);
  };

  public getUserLocation(id: string): Observable<Location> {
    return this._httpClient.get<Location>(`${this.BASE_URL}/location/${id}`);
  };

}