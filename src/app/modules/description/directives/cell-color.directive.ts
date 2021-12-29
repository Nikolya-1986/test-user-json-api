import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCellColor]'
})
export class CellColorDirective {

  @HostBinding('class') bgClass: string = '';

  setColor(dark: Boolean){
    this.bgClass = dark ? "black": ''
  }
}
