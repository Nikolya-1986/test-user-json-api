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
import { ExtraComponent } from './components/extra/extra.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalWindowModule } from 'src/app/components/modal-window/modal-window.module';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent,
    FormatDatePipe,
    IsVisibleOrNotDirective,
    CellColorDirective,
    CellColorSwitcherDirective,
    ExtraComponent,
    SliderComponent,
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    ModalWindowModule
  ]
})
export class DescriptionModule { }
