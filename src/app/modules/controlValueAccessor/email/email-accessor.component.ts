import { Component, forwardRef, Inject, Injector, INJECTOR, Input, OnInit, Provider } from '@angular/core';
import { 
  AbstractControl, 
  ControlValueAccessor, 
  NgControl, 
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR, 
  ValidationErrors, 
  Validator, 
  ValidatorFn, 
  Validators 
} from '@angular/forms';
import { EmailAsyncValidator } from 'src/app/validators/email-async.validator';

export const EMAIL_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmailAccessorComponent),
  multi: true,
};

export const EMAIL_CONTROL_VALIDATORS: Provider = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailAccessorComponent),
  multi: true,
};

@Component({
  selector: 'app-email-accessor',
  templateUrl: './email-accessor.component.html',
  styleUrls: ['./email-accessor.component.scss'],
  providers: [
    EMAIL_CONTROL_VALUE_ACCESSOR, 
    EMAIL_CONTROL_VALIDATORS
  ],
})
export class EmailAccessorComponent implements ControlValueAccessor, Validator, OnInit  {

  @Input() public type = 'text';
  @Input() public isRequired: boolean = false;
  @Input() public pattern: string = '';
  @Input() public label: string = '';
  @Input() public placeholder!: string;

  public disabled!: any;
  public email!: string;
  public controlDir!: NgControl;

  constructor(
    @Inject(INJECTOR) private injector: Injector,
    public emailAsyncValidator: EmailAsyncValidator,
  ) { }

  public ngOnInit(): void {
    this.controlDir = this.injector.get(NgControl);
  };

  public writeValue(value: string): void {
    this.email = value;
  };;

  public registerOnChange(value: any): void {
    this.onChange = value;
  };

  public registerOnTouched(value: any): void {
    this.onTouched = value;
  };

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  };

  public onChange(event: any) { }

  public onTouched() { }

  validate(abstractControl: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = this.controlDir?.validator ? [this.controlDir.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }
    if(this.emailAsyncValidator) {
      validators.push(this.emailAsyncValidator.validate.bind(this.emailAsyncValidator))
    }

    return validators;
  }

}
