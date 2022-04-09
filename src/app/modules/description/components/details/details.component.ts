import { Component, Input, OnInit, Output, EventEmitter, ContentChild, ContentChildren, ElementRef, QueryList, AfterContentInit, ViewChildren, AfterViewInit } from '@angular/core';

import { Position } from '../../../../interfaces/position.interface';
import { Location } from '../../../../interfaces/location.interface';
import { UserDTO } from '../../../../interfaces/user.interface';
import * as fromDescriptonConstants from '../../../description/description-constants';
import { CellColorDirective } from '../../directives/cell-color.directive';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ContentChild('contentChecbox') contentChecbox!: ElementRef;
  @ContentChildren('contentButton') contentButton!: QueryList<ElementRef> ;
  @ViewChildren(CellColorDirective) viewChildren!: QueryList<CellColorDirective>;

  @Input() public userDetails!: UserDTO<Position, Location>;
  @Input() public showTable!: boolean;
  @Input() public showText!: boolean;
  @Input() public darkColor!: boolean;
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
  };

  public ngAfterViewInit() {
    this.viewChildren.changes.subscribe(() => {
      this._updateViewChildren();
    });
    this._updateViewChildren();
  };

  private _updateViewChildren() {
    setTimeout(() => {
        this.viewChildren.forEach((child, index) => {
          child.setColor(index % 2 ? true : false);
        })
    }, 0);
  }

  public deleteUser(): void {
    this.openModalDeleteUser.emit(this.userDetails);
  };

  public editUser(): void {
    this.editCurrentUser.emit(this.userDetails.id);
  };

}
