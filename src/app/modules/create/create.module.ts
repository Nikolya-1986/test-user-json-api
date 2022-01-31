import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material-example.module';

import { CreateRoutingModule } from './create-routing';
import { CreateComponent } from './create.component';

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    CreateRoutingModule,
  ]
})
export class CreateModule { }
