import { Component, ElementRef, forwardRef, Injector, Input, OnInit, Provider, ViewChild } from '@angular/core';
import { 
  AbstractControl, 
  ControlValueAccessor, 
  NgControl, 
  NG_ASYNC_VALIDATORS, 
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, 
  Validator, 
  ValidatorFn, 
} from '@angular/forms';
import { EmailAsyncValidator } from '../../../validators/email-async.validator';

export const EMAIL_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmailAccessorComponent),
  multi: true,
};

export const CONTROL_VALIDATORS: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailAccessorComponent),
  multi: true,
};

export const ASYNC_CONTROL_VALIDATORS: Provider = {
  provide: NG_ASYNC_VALIDATORS,
  useExisting: forwardRef(() => EmailAsyncValidator),
  multi: true,
};

@Component({
  selector: 'app-email-accessor',
  templateUrl: './email-accessor.component.html',
  styleUrls: ['./email-accessor.component.scss'],
  providers: [
    EMAIL_CONTROL_VALUE_ACCESSOR, 
    ASYNC_CONTROL_VALIDATORS,
    CONTROL_VALIDATORS,
  ],
})
export class EmailAccessorComponent implements ControlValueAccessor, Validator, OnInit  {

  @ViewChild('inputEmail', { read: NgControl }) public inputEmail!: ElementRef;
  @Input() public type = 'text';
  @Input() public isRequired!: boolean;
  @Input() public emailPattern!: string;
  @Input() public label: string = '';
  @Input() public placeholder!: string;
  public disabled!: boolean;
  public controlDir!: NgControl;

  constructor(
    private injector: Injector,
    public emailAsyncValidator: EmailAsyncValidator,
  ) { }

  public ngOnInit(): void {
    this.controlDir = this.injector.get(NgControl);
    this.controlDir.control?.setValidators([this.validate.bind(this)]);
    this.controlDir.control?.updateValueAndValidity();
  };
  
  public onChange(event: any) { };

  public onTouched() { };

  public writeValue(value: string): void {
    if(this.inputEmail){
      this.inputEmail.nativeElement.value = value;
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

  public validate(abstractControl: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];
    // if (this.isRequired) {
    //   validators.push(Validators.required);
    // }
    // if (this.emailPattern) {
    //   validators.push(Validators.pattern(this.emailPattern));
    // }
    // if (this.emailAsyncValidator) {
    //   validators.push(this.emailAsyncValidator.validate.bind(this.emailAsyncValidator));
    // }

    return validators;
  }

}