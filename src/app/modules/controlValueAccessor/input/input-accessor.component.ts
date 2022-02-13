import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

import { EmailAsyncValidator } from '../../../validators/email-async.validator';

// export const NAME_CONTROL_VALUE_ACCESSOR: Provider = {
//   provide: NG_VALUE_ACCESSOR,
//   useExisting: forwardRef(() => NameAccessorComponent),
//   multi: true,
// };

// export const CONTROL_VALIDATORS: Provider = {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => NameAccessorComponent),
//   multi: true,
// };

// export const ASYNC_CONTROL_VALIDATORS: Provider = {
//   provide: NG_ASYNC_VALIDATORS,
//   useExisting: forwardRef(() => EmailAsyncValidator),
//   multi: true,
// };

@Component({
  selector: 'app-input-accessor',
  templateUrl: './input-accessor.component.html',
  styleUrls: ['./input-accessor.component.scss'],
  // providers: [
  //   NAME_CONTROL_VALUE_ACCESSOR,
  //   CONTROL_VALIDATORS,
  //   ASYNC_CONTROL_VALIDATORS
  // ]
})
export class InputAccessorComponent implements ControlValueAccessor, Validator, OnInit {

  @ViewChild('inputName') inputName!: ElementRef;
  @Input() public type = 'text';
  @Input() public isRequired!: boolean;
  @Input() public patternLettersNumbers!: string;
  @Input() public patternLetters!: string;
  @Input() public patternCapitalLetters!: string;
  @Input() public emailPattern!: string;
  @Input() public patternNumbers!: string;
  @Input() public patternMinLength!: number;
  @Input() public patternMaxLength!: number;
  @Input() public label!: string;
  @Input() public placeholder!: string;
  public disabled!: boolean;
  
  constructor(
    @Self() public controlDir: NgControl,
    public emailAsyncValidator: EmailAsyncValidator,
  ) {
    this.controlDir.valueAccessor = this;
  }

  public ngOnInit(): void {
    this.validate();
  };

  public writeValue(value: string): void {
    if(this.inputName){
      this.inputName.nativeElement.value = value;
    }
  };

  public registerOnChange(value: any): void {
    this.onChange = value;
  };

  public registerOnTouched(value: any): void {
    this.onTouched = value;
  };

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  };

  public onChange(event: any) { };

  public onTouched() { };

  public validate(): ValidationErrors {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator ? [control.validator] : [];

    if(this.isRequired) {
      validators.push(Validators.required);
    }
    if(this.patternLettersNumbers) {
      validators.push(Validators.pattern(this.patternLettersNumbers));
    }
    if(this.patternLetters) {
      validators.push(Validators.pattern(this.patternLetters));
    }
    if(this.patternNumbers) {
      validators.push(Validators.pattern(this.patternNumbers));
    }
    if(this.patternMinLength) {
      validators.push(Validators.minLength(this.patternMinLength));
    }
    if(this.emailPattern) {
      validators.push(Validators.pattern(this.emailPattern));
    }
    // if (this.emailAsyncValidator) {
    //   validators.push(this.emailAsyncValidator.validate.bind(this.emailAsyncValidator));
    // }
    if(this.patternMaxLength) {
      validators.push(Validators.maxLength(this.patternMaxLength));
    }
    if(this.patternCapitalLetters) {
      validators.push(Validators.pattern(this.patternCapitalLetters));
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();

    return validators;
  };
}
