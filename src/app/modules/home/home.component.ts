import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Gender, Status, UserDTO } from 'src/app/interfaces/user.interface';
import * as userActions from 'src/app/store/user/user.actions';
import * as userSelectors from 'src/app/store/user/user.selectors';
import AppUserState from 'src/app/store/user/user.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public users$!: Observable<UserDTO[]>;
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string>;
  public searchUserName: string = '';
  public filterUserName: string = 'Default';
  public sortAlfabetParamets: string[] = ['Default', 'Alphabet(Aa-Zz)', 'Alphabet(Zz-Aa)'];
  public filterUserGender: Gender = Gender.all;
  public gender: Gender[] = [Gender.all, Gender.female, Gender.male];
  public fiterUserStatus: Status = Status.all;
  public status: Status[] = [Status.all, Status.married, Status.single, Status.divorced];

  constructor(
    private store: Store<AppUserState>
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(userActions.loadUsersRequest());
    this.isLoading$ = this.store.pipe(select(userSelectors.getIsLoadingSelector));
    this.users$ = this.store.pipe(select(userSelectors.getUsersSelector));
    this.error$ = this.store.pipe(select(userSelectors.getFailSelector))
  };

  public onCurrentSearchName(searchName: string): void {
    this.searchUserName = searchName 
  };

  public onCurrentAlfabetValue(alfabetValue: string): void {
    this.filterUserName = alfabetValue
  };

  public onCurrentGender(genderValue: string | any): void {
    this.filterUserGender = genderValue
  };

  public onCurrentSratus(statusValue: string | any): void {
    this.fiterUserStatus = statusValue
  }
}
