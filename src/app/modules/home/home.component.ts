import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";
import { ActivatedRoute, Router } from '@angular/router';

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
export class HomeComponent implements OnInit, OnDestroy {

  public users$!: Observable<UserDTO[]>;
  public isLoading$!: Observable<boolean>;
  public error$!: Observable<string>;
  public destroy$: Subject<boolean> = new Subject();
  public searchUserName: string = '';
  public filterUserNameAge: string = 'Default';
  public sortParamets: string[] = ['Default', 'Alphabet(Aa-Zz)', 'Alphabet(Zz-Aa)', 'Age(Old-young)', 'Age(Young-old)'];
  public filterUserGender: Gender = Gender.all;
  public gender: Gender[] = [Gender.all, Gender.female, Gender.male];
  public fiterUserStatus: Status = Status.all;
  public status: Status[] = [Status.all, Status.married, Status.single, Status.divorced];
  public filterUserLanguage!: string;//for pipe
  public languages!: string[];//keep all languages from server
  public activelanguage!: string;
  public filterUserAvailable!: boolean;

  constructor(
    private store: Store<AppUserState>,
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(userActions.loadUsersRequest());
    this.isLoading$ = this.store.pipe(select(userSelectors.getIsLoadingSelector));
    this.users$ = this.store.pipe(select(userSelectors.getUsersSelector));
    this.error$ = this.store.pipe(select(userSelectors.getFailSelector));
    this.fetchLanguages();
    this.fetchQueryParams();
  };
  
  public onDetailUser(id: number): void {
    this.router.navigate(['description', id]);
  };

  public onCurrentSearchName(searchName: string): void {
    this.searchUserName = searchName ;
  };

  public onCurrentForSortValue(alfabetValue: string): void {
    this.filterUserNameAge = alfabetValue;
  };

  public onCurrentGender(genderValue: string | any): void {
    this.filterUserGender = genderValue;
  };

  public onCurrentSratus(statusValue: string | any): void {
    this.fiterUserStatus = statusValue;
    
  };

  public onCurrentLanguage(selectedLanguage: string): void {
    this.filterUserLanguage = selectedLanguage;
  };

  public onCurrentAvailable(selectedAvailable: boolean): void {
    this.filterUserAvailable = selectedAvailable;
  };

  public fetchQueryParams(): void{
    this.activateRoute.queryParamMap.pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(queryParams => {
      this.searchUserName = queryParams.get('selectedSearchName') || '';
      this.filterUserNameAge = queryParams.get('selectedForSortValue') || 'Default';
      this.filterUserGender = queryParams.get('selectedGender') as Gender || Gender.all;
      this.fiterUserStatus = queryParams.get('selectedStatus') as Status || Status.all;
      this.filterUserAvailable = queryParams.get('selectedAvailable') === 'true';
      this.filterUserLanguage = queryParams.get('selectedlanguage') || this.activelanguage;
      this.activelanguage = queryParams.get('selectedlanguage') as string;
    })
  };

  public fetchLanguages(): void {
    this.userService.getLanguages().pipe(
      takeUntil(this.destroy$),
      map((response) => {
        const nameButtonAllLanguages = 'All languages';
        this.languages = [nameButtonAllLanguages, ...response];
        return this.languages;
      })
    )
    .subscribe((result) => {
      if(!this.activelanguage) {
        this.activelanguage = result[0];
      }
    })
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  };
}
