import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryAccessorComponent } from './country-accessor.component';

@NgModule({
  declarations: [
    CountryAccessorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CountryAccessorComponent
  ]
})
export class CountryAccessorModule { }
