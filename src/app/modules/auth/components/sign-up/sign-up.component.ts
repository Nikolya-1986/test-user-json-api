import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { Auth } from '../../../../interfaces/auth.interface';
import AppUserState from '../../../../store/user/user.state';
import * as adminActions from '../../../../store/auth/auth.actions';
import * as validators from '../../../../validators/password-validator';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  public formSignUp!: FormGroup;
  private subscription: Subscription[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppUserState>,
  ) { }

  public ngOnInit(): void {
    this.reactiveFormAdmin();
  };

  public reactiveFormAdmin(): void {
    this.formSignUp = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
    },
    {
      validator: validators.PasswordValidator.passwordMatchValidator
    }
    );
    this.handleFormChanges();
  };

  private handleFormChanges(): void {
    combineLatest([this.formSignUp.valueChanges, this.formSignUp.statusChanges])
    .subscribe((admin) => {
      if(this.formSignUp.valid) {
        console.log('Form validation status: SUCESS', admin)
      }else {
        console.log('Form validation status: ERROR', admin);
      }
    }),
    this.updateTreeValidity(this.formSignUp);
  };

  public createAdmin(): void {
    if(this.formSignUp.valid){
      const newAdmin = this.formSignUp.getRawValue();
      const id = Math.random();
      const createAdmin: Auth = {
        ...newAdmin,
        id: id,
      };
      this.store.dispatch(adminActions.signUpRequest({ signUpAdmin: createAdmin }));
      console.log(createAdmin);
    }
  };

  private updateTreeValidity(group: FormGroup | FormArray | any): void {
    Object.keys(group.controls).forEach((key: string) => {
      const control = group.controls[key];
      if(control instanceof FormGroup || control instanceof FormArray){
        this.updateTreeValidity(control)
      }else {
        control.updateValueAndValidity();
      }
    })
  };

  public ngOnDestroy(): void {
    this.subscription.forEach((sub) => {
      sub.unsubscribe();
    });
  };
}