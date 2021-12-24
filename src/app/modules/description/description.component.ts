import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDTO } from '../../interfaces/user.interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public userDetail$!: Observable<UserDTO>;

  constructor() { }

  ngOnInit(): void {
  }

}
