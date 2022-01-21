import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { MaterialExampleModule } from '../../material-example.module';
import { IsVisibleOrNotDirective } from './directives/is-visible.directive';
import { CellColorDirective } from './directives/cell-color.directive';
import { CellColorSwitcherDirective } from './directives/cell-color-switcher.directive';
import { ExtraComponent } from './components/extra/extra.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalWindowModule } from '../../components/modal-window/modal-window.module';
import { ApplicationPipeModule } from '../../pipes/application-pipe.module';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent,
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
    ApplicationPipeModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    ModalWindowModule,
  ],
})
export class DescriptionModule { }
