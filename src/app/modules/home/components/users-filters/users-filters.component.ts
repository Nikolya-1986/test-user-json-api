import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Input() public languages!: string[];
  @Output() public currentSearchName = new EventEmitter<string>();
  @Output() public currentAlfabetValue = new EventEmitter<string>();
  @Output() public currentGender = new EventEmitter<string>();
  @Output() public currentSratus = new EventEmitter<string>();
  @Output() public currentLanguage = new EventEmitter<string>();

  public isActibe!: boolean;
  
  constructor() { }

  public ngOnInit(): void {
  }; 

  public ngAfterViewInit(): void {
    this.focusInputElementRef.nativeElement.focus();
  };

  public inputCurrentName(): void {
    this.currentSearchName.emit(this.searchUserName);
  };
  
  public selectAlfabetSort(): void {
    this.currentAlfabetValue.emit(this.filterUserName);
  };

  public selectGenderSort(): void {
    this.currentGender.emit(this.filterUserGender)
  };

  public selectStatusSort(): void {
    this.currentSratus.emit(this.fiterUserStatus)
  }

  public onCurrentLanguage(language: string): void {
    this.currentLanguage.emit(language)
  }
}
