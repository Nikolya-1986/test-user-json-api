import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() public userDetails!: UserDTO;
  @Input() public showTable!: boolean;
  @Input() public showText!: boolean;
  @Output() public openModalDeleteUser = new EventEmitter<UserDTO>();

  constructor() {}

  public ngOnInit(): void {
  };

  public deleteUser(): void {
    this.openModalDeleteUser.emit(this.userDetails)
  }
}
