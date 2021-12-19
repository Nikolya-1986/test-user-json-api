import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users-filters',
  templateUrl: './users-filters.component.html',
  styleUrls: ['./users-filters.component.scss']
})
export class UsersFiltersComponent implements OnInit, AfterViewInit {

  @ViewChild('focusInput') focusInputElementRef!: ElementRef;

  @Input() public searchUserName!: string;
  @Output() public currentSearchName = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
  };

  public ngAfterViewInit(): void {
    this.focusInputElementRef.nativeElement.focus();
  };

  public inputCurrentName(): void {
    this.currentSearchName.emit(this.searchUserName);
  };

}
