import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  static passwordMatchValidator(control: AbstractControl | any) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
 
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }
}