import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailAccessorComponent } from './email-accessor.component';

@NgModule({
  declarations: [
    EmailAccessorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmailAccessorComponent,
  ]
})
export class EmailAccessorModule { }
