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
  private level!: string;
  private onChange!: Function; 
  private onTouched!: Function; 

  constructor() {
    this.onChange = (_: any) => {};
    this.onTouched = () => {};
    this.disabled = false; 
  };

  public isActive(value: string): boolean {
    return value === this.level; 
  }; 

  public setLevel(value: string): void {
    this.level = value;
    this.onChange(this.level);
    this.onTouched(); 
  }; 

  public writeValue(obj: string): void {
    this.level = obj; 
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
