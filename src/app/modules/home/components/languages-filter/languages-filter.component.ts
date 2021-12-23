import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-languages-filter',
  templateUrl: './languages-filter.component.html',
  styleUrls: ['./languages-filter.component.scss']
})
export class LanguagesFilterComponent implements OnInit {

  @Input() public language!: string;
  @Output() public currentLanguage = new EventEmitter<string>();

  public isActibe!: boolean;
  
  constructor() { }

  public ngOnInit(): void {
  };

  public languageSelect(): void {
    this.currentLanguage.emit(this.language)
  }
}
