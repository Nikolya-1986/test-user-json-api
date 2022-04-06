import { Component, Input, OnInit, Output, EventEmitter, ContentChild, ContentChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';

import { Position } from '../../../../interfaces/position.interface';
import { Location } from '../../../../interfaces/location.interface';
import { UserDTO } from '../../../../interfaces/user.interface';
import * as fromDescriptonConstants from '../../../description/description-constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterContentInit {

  @ContentChild('contentChecbox') contentChecbox!: ElementRef;
  @ContentChildren('contentButton') contentButton!: QueryList<ElementRef> ;
  
  @Input() public userDetails!: UserDTO<Position, Location>;
  @Input() public showTable!: boolean;
  @Input() public showText!: boolean;
  @Output() public openModalDeleteUser = new EventEmitter<UserDTO<Position, Location>>();
  @Output() public editCurrentUser = new EventEmitter<number>();

  readonly TABLE_USER_HEADER = fromDescriptonConstants.TABLE_USER_HEADER;

  constructor() {}

  public ngOnInit(): void {
  };

  public ngAfterContentInit(): void {
    const data: ElementRef[] = this.contentButton.toArray();
    // console.log(this.contentChecbox);
    // console.log(data)
  }

  public deleteUser(): void {
    this.openModalDeleteUser.emit(this.userDetails);
  };

  public editUser(): void {
    this.editCurrentUser.emit(this.userDetails.id);
  };

}
