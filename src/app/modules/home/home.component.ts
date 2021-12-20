import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { Gender, UserDTO } from 'src/app/interfaces/user.interface';
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
  }
}
