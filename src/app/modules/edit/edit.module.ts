import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material-example.module';
import { ModalWindowModule } from '../../components/modal-window/modal-window.module';
import { EditRoutingModule } from './edit-routing.module';
import { ApplicationPipesModule } from 'src/app/pipes/application-pipes.module';

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
    ApplicationPipesModule
  ]
})
export class EditModule { }
