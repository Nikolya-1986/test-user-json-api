import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, reduce, Subject, takeUntil, tap } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { Gender, Status, UserDTO } from '../../interfaces/user.interface';
import * as userActions from '../../store/user/user.actions';
import * as userSelectors from '../../store/user/user.selectors';
import AppUserState from '../../store/user/user.state';

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
  public destroy$: Subject<boolean> = new Subject();
  public languages!: string[];
  public filterUserLanguage!: string;

  constructor(
    private store: Store<AppUserState>,
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(userActions.loadUsersRequest());
    this.isLoading$ = this.store.pipe(select(userSelectors.getIsLoadingSelector));
    this.users$ = this.store.pipe(select(userSelectors.getUsersSelector));
    this.error$ = this.store.pipe(select(userSelectors.getFailSelector));
    this.getLanguages()
  };
  
  public getLanguages(): string[] {
    this.userService.getUsers().pipe(
      takeUntil(this.destroy$),
      map((response) => {
        const users = response;
        const arraysLanguages = users.map((languages) => languages.language);
        this.languages = [...new Set(arraysLanguages.reduce((acc, item) => acc.concat(item)))]
      })
    )
    .subscribe(() => console.log(this.languages))
    return this.languages;
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
  };

  public onCurrentLanguage(selectedLanguage: string) {
    this.filterUserLanguage = selectedLanguage
    console.log(this.filterUserLanguage)
  }
}
