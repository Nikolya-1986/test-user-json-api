import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Admin } from '../../interfaces/admin.interface';
import AppUserState from '../../store/user/user.state';
import * as adminActions from '../../store/admin/admin.actions';
import { combineLatest, Subscription } from 'rxjs';
import * as validators from '../../validators/password-validator';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {

  public formAdmin!: FormGroup;
  private subscription: Subscription[] = [];
  
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppUserState>,
  ) { }

  public ngOnInit(): void {
    this.reactiveFormAdmin();
  };

  public reactiveFormAdmin(): void {
    this.formAdmin = this.formBuilder.group({
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
    combineLatest([this.formAdmin.valueChanges, this.formAdmin.statusChanges])
    .subscribe((admin) => {
      if(this.formAdmin.valid) {
        console.log('Form validation status: SUCESS', admin)
      }else {
        console.log('Form validation status: ERROR', admin);
      }
    })
    this.updateTreeValidity(this.formAdmin);
  };

  public createAdmin(): void {
    if(this.formAdmin.valid){
      const newAdmin = this.formAdmin.getRawValue();
      const id = Math.random();
      const token = String(Math.floor(Math.random() * 100) + 1);
      const createAdmin: Admin = {
        ...newAdmin,
        id: id,
        token: token,
      }
      this.store.dispatch(adminActions.createAdminRequest({ signUpAdmin: createAdmin }));
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