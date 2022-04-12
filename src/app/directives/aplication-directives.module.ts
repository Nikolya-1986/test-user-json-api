import { NgModule } from '@angular/core';

import { ErrorSuccessClassDirective } from './error-success-class.directives';
import { MarkallTouchedDirective } from './mark-all-touched.directive';
import { TooltipDirective } from './tooltip.directive';


@NgModule({
  declarations: [
    ErrorSuccessClassDirective,
    MarkallTouchedDirective,
    TooltipDirective,
  ],
  exports: [
    ErrorSuccessClassDirective
  ],

})
export class ApplicationDirectivesModule { }