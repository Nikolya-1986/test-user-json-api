import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  public formAdmin!: FormGroup;
  public myContext = { $implicit: 'World', localSk: 'Svet' };

  constructor(
    private formBuilder: FormBuilder,
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

  createAdmin(): void {
    // console.log(this.admin);
  }

}
