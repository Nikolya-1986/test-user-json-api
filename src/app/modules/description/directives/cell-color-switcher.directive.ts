import { ContentChildren, Directive, Input, QueryList, SimpleChange } from '@angular/core';
import { CellColorDirective } from './cell-color.directive';

@Directive({
  selector: 'table'
})
export class CellColorSwitcherDirective {

  @Input("paCellDarkColor") modelProperty!: Boolean;
  @ContentChildren(CellColorDirective) contentChildren!: QueryList<CellColorDirective>;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    this._updateContentChildren(changes["modelProperty"].currentValue);
  }

  ngAfterContentInit() {
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => this._updateContentChildren(this.modelProperty), 0);
    });
  }

  private _updateContentChildren(dark: Boolean) {
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  };

}
