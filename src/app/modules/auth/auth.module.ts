import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { InputAccessorModule } from '../controlValueAccessor/input/input-accessor.module';
import { AuthEffect } from '../../store/auth/auth.effects';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/store/app.state';
import { AuthReducer } from 'src/app/store/auth/auth.reducer';
import { EmailAsyncValidator } from '../../validators/async/email-async.validator';
import { PasswordAsyncValidator } from 'src/app/validators/async/password-async.validator';

@NgModule({
  declarations: [
    LogInComponent, 
    SignUpComponent,
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    InputAccessorModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [
    EmailAsyncValidator,
    PasswordAsyncValidator,
  ]
})
export class AuthModule {}