import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { MaterialExampleModule } from '../../material-example.module';
import { HomeComponent } from './home.component';
import { UsersCardsComponent } from './components/users-cards/users-cards.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UsersFiltersComponent } from './components/users-filters/users-filters.component';
import { LanguagesFilterComponent } from './components/languages-filter/languages-filter.component';
import { ApplicationPipeModule } from '../../pipes/application-pipe.module';
import { SearchNamePipe } from './pipes/search-name.pipe';
import { FilterNameAgePipe } from './pipes/filter-name-age.pipe';
import { FilterGenderPipe } from './pipes/filter-gender.pipe';
import { FilterStatusPipe } from './pipes/filter-status.pipe';
import { FilterLaguagePipe } from './pipes/filter-laguage.pipe';
import { FilterAvailablePipe } from './pipes/filter-available.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    UsersCardsComponent,
    UserItemComponent,
    UsersFiltersComponent,
    LanguagesFilterComponent,
    SearchNamePipe,
    FilterNameAgePipe,
    FilterGenderPipe,
    FilterStatusPipe,
    FilterLaguagePipe,
    FilterAvailablePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    ApplicationPipeModule
  ]
})
export class HomeModule { }