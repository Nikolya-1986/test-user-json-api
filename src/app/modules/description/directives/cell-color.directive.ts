import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'td'
})
export class CellColorDirective {

  @HostBinding('class.black') bgClass: string = '';

  setColor(dark: Boolean){
    this.bgClass = dark ? 'black': '';
  }
}
