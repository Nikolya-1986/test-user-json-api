import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
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
  public activelanguage!: string;
  public filterUserLanguage!: string;

  constructor(
    private store: Store<AppUserState>,
    private userService: UserService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(userActions.loadUsersRequest());
    this.isLoading$ = this.store.pipe(select(userSelectors.getIsLoadingSelector));
    this.users$ = this.store.pipe(select(userSelectors.getUsersSelector));
    this.error$ = this.store.pipe(select(userSelectors.getFailSelector));
    this.getLanguages()
  };
  
  public onDetailUser(id: number): void {
    this.router.navigate(['description', id])
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
//////////////////
  public onCurrentLanguage(selectedLanguage: string): void {
    this.activelanguage = selectedLanguage;
    this.filterUserLanguage = selectedLanguage;
  };

  public getLanguages(): string[] {
    this.userService.getUsers().pipe(
      takeUntil(this.destroy$),
      map((response) => {
        this.languages = this.uniqueLanguages(response);
      })
    )
    .subscribe(() => {
      this.activelanguage = this.languages[0]
    })
    return this.languages;
  };

  private uniqueLanguages(users: UserDTO[]): string[] {
    const arraysLanguages = users.map((languages) => languages.language);
    const nameButtonAllLanguages = 'All languages';
    const arraylanguages = arraysLanguages.reduce((acc, item) => {
      const uniqueLanguages = [...new Set(acc.concat(item))];
      return uniqueLanguages;
    });
    const allLanguages = [nameButtonAllLanguages, ...arraylanguages];
    return allLanguages;
  };
}
