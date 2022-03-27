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
  @Input() public showTable!: boolean;
  
  readonly TABLE_EPISODE_HEADER = fromDescriptonConstants.TABLE_EPISODE_HEADER;

  constructor() { }

  ngOnInit(): void {
  }

}
