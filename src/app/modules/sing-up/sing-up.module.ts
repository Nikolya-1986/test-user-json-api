import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SingUpComponent } from './sing-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { InputAccessorModule } from '../controlValueAccessor/input/input-accessor.module';

@NgModule({
  declarations: [
    SingUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignUpRoutingModule,
    InputAccessorModule,
  ]
})
export class SingUpModule { }
