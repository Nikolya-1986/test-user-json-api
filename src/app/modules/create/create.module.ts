import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';
import { CountryAccessorModule } from '../controlValueAccessor/country/country-accessor.module';
import { GenderAccessorModule } from '../controlValueAccessor/gender/gender-accessor.module';
import { StatusAccessorModule } from '../controlValueAccessor/status/status-accessor.module';
import { AvailableAccessorModule } from '../controlValueAccessor/available/available-accessor.module';

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
    GenderAccessorModule,
    StatusAccessorModule,
    AvailableAccessorModule
  ]
})
export class CreateModule { }
