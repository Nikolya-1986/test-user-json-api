import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public userDetail$!: Observable<UserDTO | any>
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;
  public images!: Picture[];
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['name.title', 'name.first', 'name.last', 'dob.date', 'name.gender', 'name.status', 'location.country', 
                                      'location.city', 'email', 'language', 'registered.date', 'phone', 'nat'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
  ) { }

  public ngOnInit(): void {
    this.getUserDetail();
    // this.preloadImages()
  };

  public getUserDetail(): void {
    this.userDetail$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.pipe(select(userSelectors.getUserSelector(id)))),
      tap(user => console.log(user))
    )
  };

  public preloadImages(): void {
    for (const image of this.images) {
      new Image().src = image.large;
    }
  };

  public onPreviousImage(previous: number): void {
    // this.currentImage = previous < 0 ? this.images.length - 1 : previous 
  };

  public onNextImage(next: number): void {
    // this.currentImage = next === this.images.length ? 0 : next
  }

}
