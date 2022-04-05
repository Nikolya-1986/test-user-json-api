import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Position } from '../../../../interfaces/position.interface';
import { Location } from '../../../../interfaces/location.interface';
import { UserDTO } from '../../../../interfaces/user.interface';
import * as fromDescriptonConstants from '../../description-constants';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.scss']
})
export class AdditionalComponent implements OnInit {

  @Input() public userDetails!: UserDTO<Position, Location>;
  @Input() public showTable!: boolean;
  @Output() public getResidentName = new EventEmitter<number>();
  
  readonly TABLE_EPISODE_HEADER = fromDescriptonConstants.TABLE_EPISODE_HEADER;
  readonly TABLE_POSITION_HEADER = fromDescriptonConstants.TABLE_POSITION_HEADER;
  readonly TABLE_LOCATION_HEADER = fromDescriptonConstants.TABLE_LOCATION_HEADER

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  public openResident(residentId: number): void {
    this.getResidentName.emit(residentId);
  };

}
