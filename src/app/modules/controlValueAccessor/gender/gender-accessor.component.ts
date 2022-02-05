import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const GENDER_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GenderAccessorComponent),
  multi: true, 
}; 

@Component({
  selector: 'app-gender-accessor',
  templateUrl: './gender-accessor.component.html',
  styleUrls: ['./gender-accessor.component.scss'],
  providers: [GENDER_CONTROL_VALUE_ACCESSOR]
})
export class GenderAccessorComponent implements ControlValueAccessor {

  public disabled!: boolean;
  public gender!: string | any;
  private onChange!: Function; 
  private onTouched!: Function; 

  constructor() {};

  public pictures = [
    { src: './assets/images/female.jpg', name: 'female' },
    { src: './assets/images/male.jpg', name: 'male' },
    { src: './assets/images/intersex.jpg', name: 'intersex' },
  ];

  public selectedGender(value: string): void {
    this.gender = value;
    this.onChange(this.gender);
    this.onTouched(this.gender); 
  }; 

  public writeValue(value: string): void {
    this.gender = value; 
  }; 

  public registerOnChange(fn: Function): void{
    this.onChange = fn; 
  }; 

  public registerOnTouched(fn: Function): void {
    this.onTouched = fn; 
  }; 

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; 
  };
}
