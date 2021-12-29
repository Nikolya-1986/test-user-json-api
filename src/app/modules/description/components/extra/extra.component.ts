import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  @Input() public displayedColumns!: string[];
  @Input() public dataSource = new MatTableDataSource();
  
  constructor() { }

  ngOnInit(): void {
  }

}
