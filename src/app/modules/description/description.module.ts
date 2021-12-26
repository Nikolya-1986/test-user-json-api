import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { MaterialExampleModule } from '../../material-example.module';
import { DetailsComponent } from './components/details/details.component';
import { FormatDatePipe } from './pipes/format-date.pipe';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent,
    FormatDatePipe
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    MaterialExampleModule
  ]
})
export class DescriptionModule { }
