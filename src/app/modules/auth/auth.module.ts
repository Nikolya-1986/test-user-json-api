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
import { authReducer } from 'src/app/store/auth/auth.reducer';
import { EmailAsyncValidator } from '../../validators/async/email-async.validator';
import { PasswordAsyncValidator } from 'src/app/validators/async/password-async.validator';
import { ApplicationDirectivesModule } from 'src/app/directives/aplication-directives.module';

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
    ApplicationDirectivesModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [
    EmailAsyncValidator,
    PasswordAsyncValidator,
  ]
})
export class AuthModule {}