import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { MaterialExampleModule } from 'src/app/material-example.module';
import { ShowTableDirective } from './directives/show-table.directive';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent,
    FormatDatePipe,
    ShowTableDirective
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ]
})
export class DescriptionModule { }
