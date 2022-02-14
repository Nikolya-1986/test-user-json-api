import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputAccessorComponent } from './input-accessor.component';
import { ApplicationDirectivesModule } from '../../../directives/aplication-directives.module';

@NgModule({
  declarations: [
    InputAccessorComponent,
  ],
  imports: [
    CommonModule,
    ApplicationDirectivesModule,
  ],
  exports: [
    InputAccessorComponent,
  ],
})
export class InputAccessorModule { }
