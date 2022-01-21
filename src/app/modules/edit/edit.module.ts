import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material-example.module';
import { ModalWindowModule } from '../../components/modal-window/modal-window.module';
import { EditRoutingModule } from './edit-routing.module';
import { ApplicationPipeModule } from '../../pipes/application-pipe.module';

@NgModule({
  declarations: [
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    EditRoutingModule,
    ModalWindowModule,
    ApplicationPipeModule,
  ]
})
export class EditModule { }
