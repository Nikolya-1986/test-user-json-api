import { ContentChild, Directive, Input, SimpleChange } from '@angular/core';
import { CellColorDirective } from './cell-color.directive';

@Directive({
  selector: '[appCellColorSwitcher]'
})
export class CellColorSwitcherDirective {

  @Input('cellDarkColor') modelProperty!: Boolean;
  @ContentChild(CellColorDirective) cellColor!: CellColorDirective;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if(this.cellColor !== null){
      this.cellColor.setColor(changes['modelProperty'].currentValue)
    }
  }
}
