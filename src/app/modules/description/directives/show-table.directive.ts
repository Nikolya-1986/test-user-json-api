import { Directive, Input, TemplateRef, ViewContainerRef, SimpleChange } from '@angular/core';
import { UserDTO } from 'src/app/interfaces/user.interface';

@Directive({
  selector: '[appShowTable]'
})
export class ShowTableDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<Object>
  ) { }

  @Input('appShowTable') result!: boolean;

  ngOnChanges(changes: {[property: string]: SimpleChange}){
    let change = changes['result'];

    if(!change.isFirstChange()  && !change.currentValue) {
      this.viewContainerRef.clear();
    }else if(change.currentValue) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}
