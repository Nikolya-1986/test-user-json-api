import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Gender, Status } from '../../../../interfaces/user.interface';

@Component({
  selector: 'app-users-filters',
  templateUrl: './users-filters.component.html',
  styleUrls: ['./users-filters.component.scss']
})
export class UsersFiltersComponent implements OnInit, AfterViewInit {

  @ViewChild('focusInput') focusInputElementRef!: ElementRef;
  @Input() public searchUserName!: string;
  @Input() public filterUserNameAge!: string;
  @Input() public sortParamets!: string[];
  @Input() public filterUserGender: Gender = Gender.all;
  @Input() public gender!: Gender[]; 
  @Input() public fiterUserStatus: Status = Status.all;
  @Input() public status!: Status[];
  @Input() public filterUserLanguage!: string;
  @Input() public languages!: string[];
  @Input() public activelanguage!: string;
  @Input() public filterUserAvailable!: boolean;
  @Output() public currentSearchName = new EventEmitter<string>();
  @Output() public currentForSortValue = new EventEmitter<string>();
  @Output() public currentGender = new EventEmitter<string>();
  @Output() public currentSratus = new EventEmitter<string>();
  @Output() public currentLanguage = new EventEmitter<string>();
  @Output() public currentAvailable = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
  }; 

  public ngAfterViewInit(): void {
    this.focusInputElementRef.nativeElement.focus();
    this.changeDetectorRef.detectChanges();
  };

  public inputCurrentName(): void {
    this.currentSearchName.emit(this.searchUserName);
    this.router.navigate(['home'], { queryParams: { selectedSearchName: this.searchUserName }, queryParamsHandling: 'merge' });
  };
  
  public selectForSortSort(): void {
    this.currentForSortValue.emit(this.filterUserNameAge);
    this.router.navigate(['home'], { queryParams: { selectedForSortValue: this.filterUserNameAge }, queryParamsHandling: 'merge' });
  };

  public selectGenderSort(): void {
    this.currentGender.emit(this.filterUserGender);
    this.router.navigate(['home'], { queryParams: { selectedGender: this.filterUserGender }, queryParamsHandling: 'merge' })
  };

  public selectStatusSort(): void {
    this.currentSratus.emit(this.fiterUserStatus);
    this.router.navigate(['home'], { queryParams: { selectedStatus: this.fiterUserStatus }, queryParamsHandling: 'merge' });
  };

  public onCurrentLanguage(language: string): void {
    this.filterUserLanguage = language;
    this.currentLanguage.emit(this.filterUserLanguage);
    this.router.navigate(['home'], { queryParams: { selectedlanguage: this.filterUserLanguage }, queryParamsHandling: 'merge' });
  };

  public selectedAvailable(checkedAvailable: boolean): void {
    this.filterUserAvailable = checkedAvailable;
    this.currentAvailable.emit(this.filterUserAvailable);
    this.router.navigate(['home'], { queryParams: { selectedAvailable: this.filterUserAvailable }, queryParamsHandling: 'merge' });
  }
}
