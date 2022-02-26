import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Auth } from '../../../../interfaces/auth.interface';
import AppUserState from '../../../../store/user/user.state';
import * as adminActions from '../../../../store/auth/auth.actions';

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
      const currentAuth = this.formLogIn.getRawValue();
      const { email, password }: Auth = currentAuth;
      this.store.dispatch(adminActions.logInRequest({ email, password }));
    }
  };

}
