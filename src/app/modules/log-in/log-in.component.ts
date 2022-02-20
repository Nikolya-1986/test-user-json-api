import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Admin } from '../../interfaces/admin.interface';
import AppUserState from '../../store/user/user.state';
import * as adminActions from '../../store/admin/admin.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public formLogIn!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppUserState>,
  ) { }

  public ngOnInit(): void {
    this.reactiveFormAdmin();
  };

  public reactiveFormAdmin(): void {
    this.formLogIn = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  };

  public logIn(): void {
    if(this.formLogIn.valid){
      const currentAdmin = this.formLogIn.getRawValue();
      const token = String(Math.floor(Math.random() * 100) + 1);
      const successAdmin: Admin = {
        ...currentAdmin,
        token: token,
      };
      this.store.dispatch(adminActions.logInRequest({ logInAdmin: successAdmin }));
      console.log(successAdmin);
    }
  };

}
