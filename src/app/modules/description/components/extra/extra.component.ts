import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { EpisodeDTO } from '../../../../interfaces/episode.interface';
import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  @Input() public userExtra$!: Observable<UserDTO<EpisodeDTO>>;
  
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.fetchUserExtra();
  }

  private fetchUserExtra(): Observable<UserDTO<EpisodeDTO>> {
    this.userExtra$ = this.activatedRoute.data.pipe(
      map((data) => data['extraDescription'])
    );
    return this.userExtra$;
  };
}
