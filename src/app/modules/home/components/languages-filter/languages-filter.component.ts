import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-languages-filter',
  templateUrl: './languages-filter.component.html',
  styleUrls: ['./languages-filter.component.scss']
})
export class LanguagesFilterComponent implements OnInit, OnChanges {

  @Input() public language!: string;
  // @Input() public activelanguage!: string;
  @Input('activelanguage') set activelanguage(value: string) {
    this.isActive = this.language === value
  }
  @Output() public currentLanguage = new EventEmitter<string>();

  public isActive!: boolean;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // this.isActive = changes['language'].previousValue === changes['activelanguage'].currentValue
  }

  public ngOnInit(): void {
  };

  public languageSelect(): void {
    this.currentLanguage.emit(this.language)
  }
}
