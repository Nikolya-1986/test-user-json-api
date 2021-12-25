import { Component, Input, OnInit } from '@angular/core';

import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() userDetail!: UserDTO;
  
  constructor() { }

  public ngOnInit(): void {
  }

}
