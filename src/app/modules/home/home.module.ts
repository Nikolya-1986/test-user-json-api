import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { MaterialExampleModule } from '../../material-example.module';
import { HomeComponent } from './home.component';
import { UsersCardsComponent } from './components/users-cards/users-cards.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UsersFiltersComponent } from './components/users-filters/users-filters.component';
import { SearchNamePipe } from './pipes/search-name.pipe';
import { FilterNamePipe } from './pipes/filter-name.pipe';
import { FilterGenderPipe } from './pipes/filter-gender.pipe';
import { FilterStatusPipe } from './pipes/filter-status.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    UsersCardsComponent,
    UserItemComponent,
    UsersFiltersComponent,
    SearchNamePipe,
    FilterNamePipe,
    FilterGenderPipe,
    FilterStatusPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ]
})
export class HomeModule { }