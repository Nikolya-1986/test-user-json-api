import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';
import { CountryAccessorModule } from '../controlValueAccessor/country/country-accessor.module';
import { GenderAccessorModule } from '../controlValueAccessor/gender/gender-accessor.module';

@NgModule({
  declarations: [
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateRoutingModule,
    ApplicationPipesModule,
    CountryAccessorModule,
    GenderAccessorModule
  ]
})
export class CreateModule { }
