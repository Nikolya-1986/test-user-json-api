import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/app/material-example.module';
import { ModalWindowModule } from 'src/app/components/modal-window/modal-window.module';
import { EditRoutingModule } from './edit-routing.module';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    EditRoutingModule,
    ModalWindowModule
  ]
})
export class EditModule { }
