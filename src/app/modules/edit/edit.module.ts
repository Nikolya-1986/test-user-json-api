import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditComponent } from './edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material-example.module';
import { ModalWindowModule } from '../../components/modal-window/modal-window.module';
import { EditRoutingModule } from './edit-routing.module';
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';
import { ApplicationDirectivesModule } from 'src/app/directives/aplication-directives.module';

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
    ModalWindowModule,
    ApplicationPipesModule,
    ApplicationDirectivesModule,
  ]
})
export class EditModule { }
