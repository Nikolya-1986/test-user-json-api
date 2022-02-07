import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenderAccessorComponent } from './gender-accessor.component';

@NgModule({
  declarations: [
    GenderAccessorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GenderAccessorComponent,
  ]
})
export class GenderAccessorModule { }
