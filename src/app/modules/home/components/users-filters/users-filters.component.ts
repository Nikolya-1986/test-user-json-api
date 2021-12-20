import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Gender } from 'src/app/interfaces/user.interface';

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
  @Output() public currentSearchName = new EventEmitter<string>();
  @Output() public currentAlfabetValue = new EventEmitter<string>();
  @Output() public currentGender = new EventEmitter<string>();

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
  }
}
