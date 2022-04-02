import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Position } from '../../../../interfaces/position.interface';
import { UserDTO } from '../../../../interfaces/user.interface';
import * as fromDescriptonConstants from '../../description-constants';

@Component({
  selector: 'app-episodes',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  @Input() public userDetails!: UserDTO<Position>;
  @Input() public showTable!: boolean;
  
  readonly TABLE_EPISODE_HEADER = fromDescriptonConstants.TABLE_EPISODE_HEADER;
  readonly TABLE_POSITION_HEADER = fromDescriptonConstants.TABLE_POSITION_HEADER;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  public openResident(residentId: number): void {
    this._router.navigate(['description', residentId]);
  };

}
