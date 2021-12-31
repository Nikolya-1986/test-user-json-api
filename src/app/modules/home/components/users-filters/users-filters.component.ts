import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Gender, Status } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-users-filters',
  templateUrl: './users-filters.component.html',
  styleUrls: ['./users-filters.component.scss']
})
export class UsersFiltersComponent implements OnInit, AfterViewInit {

  @ViewChild('focusInput') focusInputElementRef!: ElementRef;

  @Input() public searchUserName!: string;
  @Input() public filterUserName!: string;
  @Input() public sortAlfabetParamets!: string[];
  @Input() public filterUserGender: Gender = Gender.all;
  @Input() public gender!: Gender[]; 
  @Input() public fiterUserStatus: Status = Status.all;
  @Input() public status!: Status[];
  @Input() public filterUserLanguage!: string;
  @Input() public languages!: string[];
  @Input() public activelanguage!: string;
  @Output() public currentSearchName = new EventEmitter<string>();
  @Output() public currentAlfabetValue = new EventEmitter<string>();
  @Output() public currentGender = new EventEmitter<string>();
  @Output() public currentSratus = new EventEmitter<string>();
  @Output() public currentLanguage = new EventEmitter<string>();

  public isActibe!: boolean;
  
  constructor(
    private router: Router,
  ) { }

  public ngOnInit(): void {
  }; 

  public ngAfterViewInit(): void {
    this.focusInputElementRef.nativeElement.focus();
  };

  public inputCurrentName(): void {
    this.currentSearchName.emit(this.searchUserName);
    this.router.navigate(['home'], { queryParams: { selectedSearchName: this.searchUserName }, queryParamsHandling: 'merge' })
  };
  
  public selectAlfabetSort(): void {
    this.currentAlfabetValue.emit(this.filterUserName);
    this.router.navigate(['home'], { queryParams: { selectedAlfabetValue: this.filterUserName }, queryParamsHandling: 'merge' })
  };

  public selectGenderSort(): void {
    this.currentGender.emit(this.filterUserGender);
    this.router.navigate(['home'], { queryParams: { selectedGender: this.filterUserGender }, queryParamsHandling: 'merge' })
  };

  public selectStatusSort(): void {
    this.currentSratus.emit(this.fiterUserStatus);
    this.router.navigate(['home'], { queryParams: { selectedStatus: this.fiterUserStatus }, queryParamsHandling: 'merge' })
  }

  public onCurrentLanguage(language: string): void {
    this.currentLanguage.emit(language);
    this.router.navigate(['home'], { queryParams: { selectedlanguage: this.filterUserLanguage }, queryParamsHandling: 'merge' })
  }
}
