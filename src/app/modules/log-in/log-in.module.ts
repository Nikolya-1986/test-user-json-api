import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LogInComponent } from './log-in.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputAccessorModule } from '../controlValueAccessor/input/input-accessor.module';
import { reduserAdmin } from '../../store/admin/admin.reducer';
import { AdminEffect } from '../../store/admin/admin.effects';

@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputAccessorModule,
    StoreModule.forFeature('auth', reduserAdmin),
    EffectsModule.forFeature([AdminEffect]),
  ]
})
export class LogInModule { }
