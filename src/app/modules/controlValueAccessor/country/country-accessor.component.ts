import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountryAccessorComponent),
  multi: true,
};

@Component({
  selector: 'app-countries',
  templateUrl: './country-accessor.component.html',
  styleUrls: ['./country-accessor.component.scss'],
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
})

export class CountryAccessorComponent implements ControlValueAccessor  {

  constructor() { }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

}
