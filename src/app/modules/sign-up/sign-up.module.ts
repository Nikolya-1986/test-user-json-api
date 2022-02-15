import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { InputAccessorModule } from '../controlValueAccessor/input/input-accessor.module';
import { AdminEffect } from 'src/app/store/admin/admin.effects';
import { reduserAdmin } from 'src/app/store/admin/admin.reducer';


@NgModule({
  declarations: [
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    InputAccessorModule,
    StoreModule.forFeature('admin', reduserAdmin),
    EffectsModule.forFeature([AdminEffect]),
  ]
})
export class SignUpModule { }
