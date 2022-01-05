import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { UserDTO } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  inputs: ['dataUserDetail'],
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  @Input() public displayedColumns!: string[];
  @Input() public dataSource = new MatTableDataSource();
  @Input() public dataUserDetail!: UserDTO;
  
  constructor() { }

  ngOnInit(): void {
  }

}
