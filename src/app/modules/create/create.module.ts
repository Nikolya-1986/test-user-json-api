import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';
import { CountryAccessorModule } from '../controlValueAccessor/country/country-accessor.module';
import { InputAccessorModule } from '../controlValueAccessor/input/input-accessor.module';
import { CheckboxAccessorModule } from '../controlValueAccessor/checkbox/checkbox-accessor.module';
import { ApplicationDirectivesModule } from 'src/app/directives/aplication-directives.module';

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
    ApplicationDirectivesModule,
    CountryAccessorModule,
    CheckboxAccessorModule,
    InputAccessorModule,
  ]
})
export class CreateModule { }
