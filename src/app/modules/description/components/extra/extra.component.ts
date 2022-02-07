import { Component, OnInit } from '@angular/core';

import { UserDTO } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  public user!: UserDTO;
  
  constructor() { }

  ngOnInit(): void {

  }

}
