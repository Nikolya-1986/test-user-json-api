import { AbstractControl } from '@angular/forms';

export class PasswordMatchValidator {

  static passwordMatchValidator(control: AbstractControl | any) {
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
 
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }
}