import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DescriptionComponent } from './description.component';
import { DescriptionRoutingModule } from './description-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { MaterialExampleModule } from '../../material-example.module';
import { IsVisibleOrNotDirective } from './directives/is-visible.directive';
import { CellColorDirective } from './directives/cell-color.directive';
import { CellColorSwitcherDirective } from './directives/cell-color-switcher.directive';
import { ExtraComponent } from './components/extra/extra.component';
import { SliderComponent } from './components/slider/slider.component';
import { ModalWindowModule } from 'src/app/components/modal-window/modal-window.module';
import { ApplicationPipesModule } from '../../pipes/application-pipes.module';
import { ExtraDescriptionResolver } from './resolvers/extra-description.resolver';
import { EpisodeEffects } from 'src/app/store/episode/episode.effects';
import { episodeReducer } from 'src/app/store/episode/episode.reducer';

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
    ReactiveFormsModule,
    MaterialExampleModule,
    ModalWindowModule,
    ApplicationPipesModule,
    StoreModule.forFeature('episode', episodeReducer),
    EffectsModule.forFeature([EpisodeEffects]),
  ],
  providers: [
    ExtraDescriptionResolver,
  ]
})
export class DescriptionModule { }
