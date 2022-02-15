import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Admin } from 'src/app/interfaces/admin.interface';
import AppUserState from 'src/app/store/user/user.state';
import * as adminActions from '../../store/admin/admin.actions';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public formAdmin!: FormGroup;
  public myContext = { $implicit: 'World', localSk: 'Svet' };

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
    })
  }

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
      this.store.dispatch(adminActions.createAdminRequest({auth: createAdmin}))
      console.log(createAdmin);
      this.updateTreeValidity(createAdmin);
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

}
// https://mherman.org/blog/authentication-in-angular-with-ngrx/
//https://morioh.com/p/d34b29a3033d
