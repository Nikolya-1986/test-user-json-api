import { NgModule } from '@angular/core';

import { CoordinatesValidatorDirective } from './coordinates-validator.directive';
import { DateBirthdayValidatorDirective } from './date-birthday-validator.directive';
import { ErrorSuccessClassDirective } from './error-success-class.directives';
import { ImageValidatorDirective } from './image-validator.directive';
import { LengthValidatorDirective } from './length-validator.directive';
import { MarkallTouchedDirective } from './mark-all-touched.directive';
import { PhoneValidatorDirective } from './phone-validator.directive';
import { TooltipDirective } from './tooltip.directive';
import { WebsiteValidatorDirective } from './wibsite-validator.directive';

@NgModule({
  declarations: [
    DateBirthdayValidatorDirective,
    CoordinatesValidatorDirective,
    ErrorSuccessClassDirective,
    WebsiteValidatorDirective,
    LengthValidatorDirective,
    PhoneValidatorDirective,
    ImageValidatorDirective,
    MarkallTouchedDirective,
    TooltipDirective,
  ],
  exports: [
    DateBirthdayValidatorDirective,
    CoordinatesValidatorDirective,
    ErrorSuccessClassDirective,
    WebsiteValidatorDirective,
    LengthValidatorDirective,
    PhoneValidatorDirective,
    ImageValidatorDirective,
    MarkallTouchedDirective,
    TooltipDirective,
  ],

})
export class ApplicationDirectivesModule { }