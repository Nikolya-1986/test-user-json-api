import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { MaterialExampleModule } from 'src/app/material-example.module';
import { IsVisibleOrNotDirective } from './directives/is-visible.directive';
import { CellColorDirective } from './directives/cell-color.directive';
import { CellColorSwitcherDirective } from './directives/cell-color-switcher.directive';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent,
    FormatDatePipe,
    IsVisibleOrNotDirective,
    CellColorDirective,
    CellColorSwitcherDirective,
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
