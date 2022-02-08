import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { UserDTO } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  @Input() public userExtra$!: Observable<UserDTO>;

  constructor(
     private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    this.fetchUserExtra();
  };

  private fetchUserExtra(): Observable<UserDTO> {
    this.userExtra$ = this.activatedRoute.data.pipe(
      map((data) => data['extraDescription'])
    );
    return this.userExtra$;
  };

}
