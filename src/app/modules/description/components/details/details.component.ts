import { Component, Input, OnInit, Output, EventEmitter, ContentChild, ContentChildren, ElementRef, QueryList, AfterContentInit } from '@angular/core';

import { Position } from '../../../../interfaces/position.interface';
import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterContentInit {

  @ContentChild('contentChecbox') contentChecbox!: ElementRef;
  @ContentChildren('contentButton') contentButton!: QueryList<ElementRef> ;
  
  @Input() public userDetails!: UserDTO<Position>;
  @Input() public showTable!: boolean;
  @Input() public showText!: boolean;
  @Output() public openModalDeleteUser = new EventEmitter<UserDTO<Position>>();
  @Output() public editCurrentUser = new EventEmitter<number>();

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
