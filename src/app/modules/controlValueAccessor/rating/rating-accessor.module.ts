import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingAccessorComponent } from './rating-accessor.component';

@NgModule({
  declarations: [
    RatingAccessorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RatingAccessorComponent,
  ],
})
export class RatingAccessorModule { }
