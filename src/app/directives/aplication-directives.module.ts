import { NgModule } from '@angular/core';

import { ErrorSuccessClassDirective } from './error-success-class.directives';
import { MarkallTouchedDirective } from './mark-all-touched.directive';


@NgModule({
  declarations: [
    ErrorSuccessClassDirective,
    MarkallTouchedDirective,
  ],
  exports: [
    ErrorSuccessClassDirective
  ],

})
export class ApplicationDirectivesModule { }