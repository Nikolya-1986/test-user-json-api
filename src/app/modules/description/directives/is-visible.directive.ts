import { Directive, Input, TemplateRef, ViewContainerRef, SimpleChange } from '@angular/core';

@Directive({
  selector: '[isVisibleOrNot]'
})
export class IsVisibleOrNotDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<Object>
  ) { }

  @Input('isVisibleOrNot') expressionResult!: boolean;

  ngOnChanges(changes: {[property: string]: SimpleChange}){
    let change = changes['expressionResult'];

    if(!change.isFirstChange()  && !change.currentValue) {
      this.viewContainerRef.clear();
    }else if(change.currentValue) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}
