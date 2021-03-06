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
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';
import { ExtraDescriptionResolver } from './resolvers/extra-description.resolver';
import { AdditionalComponent } from './components/additional/additional.component';
import { UrlPipe } from './pipes/url.pipe';
import { NameResidentPipe } from './pipes/resident.pipe';

@NgModule({
  declarations: [
    DescriptionComponent,
    DetailsComponent,
    IsVisibleOrNotDirective,
    CellColorDirective,
    CellColorSwitcherDirective,
    ExtraComponent,
    SliderComponent,
    AdditionalComponent,
    UrlPipe,
    NameResidentPipe,
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    ModalWindowModule,
    ApplicationPipesModule,
  ],
  providers: [
    ExtraDescriptionResolver,
  ]
})
export class DescriptionModule { }
