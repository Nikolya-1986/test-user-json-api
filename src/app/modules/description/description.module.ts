import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { MaterialExampleModule } from '../../material-example.module';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    MaterialExampleModule
  ]
})
export class DescriptionModule { }
