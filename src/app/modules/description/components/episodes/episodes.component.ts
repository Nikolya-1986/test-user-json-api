import { Component, Input, OnInit } from '@angular/core';

import { EpisodeDTO } from '../../../../interfaces/episode.interface';
import { UserDTO } from '../../../../interfaces/user.interface';
import * as fromDescriptonConstants from '../../description-constants';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  @Input() public userDetails!: UserDTO<EpisodeDTO>;
  readonly TABLE_EPISODE = fromDescriptonConstants.TABLE_EPISODE

  constructor() { }

  ngOnInit(): void {
  }

}
