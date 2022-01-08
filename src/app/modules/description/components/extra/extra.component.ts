import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDTO } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  @Input() public data!: UserDTO;
  
  constructor(
    private params: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

}
