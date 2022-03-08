import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Auth } from '../../../../interfaces/auth.interface';
import { AppAuthState } from '../../../../store/auth/auth.state';
import * as adminActions from '../../../../store/auth/auth.actions';
import { EmailAsyncValidator } from '../../../../validators/async/email-async.validator'
import { PasswordAsyncValidator } from '../../../../validators/async/password-async.validator';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public formLogIn!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppAuthState>,
    public emailAsyncValidator: EmailAsyncValidator,
    public passwordAsyncValidator: PasswordAsyncValidator,
  ) { }

  public ngOnInit(): void {
    this.reactiveFormAdmin();
  };

  get email(): AbstractControl | null {
    return this.formLogIn.get("email");
  };

  get password(): AbstractControl | null {
    return this.formLogIn.get("password");
  };

  public reactiveFormAdmin(): void {
    this.formLogIn = this.formBuilder.group({
      email: ['',
        [ Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+.[a-z]{2,3}') ],
        [ this.emailAsyncValidator.validate.bind(this.emailAsyncValidator) ]
      ],
      password: ['',
        [ Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$') ],
        [ this.passwordAsyncValidator.validate.bind(this.passwordAsyncValidator) ]
      ],
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
