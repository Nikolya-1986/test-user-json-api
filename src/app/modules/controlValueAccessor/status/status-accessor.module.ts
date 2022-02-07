import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusAccessorComponent } from './status-accessor.component';

@NgModule({
  declarations: [
    StatusAccessorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    StatusAccessorComponent,
  ]
})
export class StatusAccessorModule { }
