import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputAccessorComponent } from './input-accessor.component';

@NgModule({
  declarations: [
    InputAccessorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    InputAccessorComponent,
  ],
})
export class InputAccessorModule { }
