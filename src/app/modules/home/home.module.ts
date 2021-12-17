import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { UsersCardsComponent } from './components/users-cards/users-cards.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    UsersCardsComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }