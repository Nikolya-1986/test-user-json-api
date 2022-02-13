import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxAccessorComponent } from './checkbox-accessor.component';

@NgModule({
  declarations: [
    CheckboxAccessorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CheckboxAccessorComponent,
  ]
})
export class CheckboxAccessorModule { }
