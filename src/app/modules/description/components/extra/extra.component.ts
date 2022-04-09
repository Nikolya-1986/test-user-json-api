import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { PositionDTO } from "../../../../interfaces/position.interface";
import { LocationDTO } from "../../../../interfaces/location.interface";
import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  @Input() public userExtra$!: Observable<UserDTO<PositionDTO, LocationDTO>>;
  
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.fetchUserExtra();
  }

  private fetchUserExtra(): Observable<UserDTO<PositionDTO, LocationDTO>> {
    this.userExtra$ = this.activatedRoute.data.pipe(
      map((data) => data['extraDescription'])
    );
    return this.userExtra$;
  };
}
