import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { MaterialExampleModule } from '../../material-example.module';

@NgModule({
  declarations: [
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    MaterialExampleModule
  ]
})
export class DescriptionModule { }
