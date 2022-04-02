import { Component, Input, OnInit } from '@angular/core';

import { Position } from '../../../../interfaces/position.interface';
import { UserDTO } from '../../../../interfaces/user.interface';
import * as fromDescriptonConstants from '../../description-constants';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  @Input() public userDetails!: UserDTO<Position>;
  @Input() public showTable!: boolean;
  
  readonly TABLE_EPISODE_HEADER = fromDescriptonConstants.TABLE_EPISODE_HEADER;

  constructor() { }

  ngOnInit(): void {
  }

}
