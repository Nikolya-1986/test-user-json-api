import { NgModule } from '@angular/core';

import { ErrorSuccessClassDirective } from './error-success-class.directives';


@NgModule({
  declarations: [
    ErrorSuccessClassDirective
  ],
  exports: [
    ErrorSuccessClassDirective
  ],

})
export class ApplicationDirectivesModule { }