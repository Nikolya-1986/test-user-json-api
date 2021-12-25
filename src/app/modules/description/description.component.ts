import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';

import { UserDTO } from '../../interfaces/user.interface';
import { select, Store } from '@ngrx/store';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public userDetail$!: Observable<UserDTO | any>

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
  ) { }

  public ngOnInit(): void {
    this.getUserDetail()
  };

  public getUserDetail(): void {
    this.userDetail$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.pipe(select(userSelectors.getUserSelector(id)))),
      tap(user => console.log(user))
    )
  };

}
