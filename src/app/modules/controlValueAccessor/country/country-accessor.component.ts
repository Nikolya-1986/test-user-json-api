import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTRY_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CountryAccessorComponent),
  multi: true,
};

@Component({
  selector: 'app-countries-accessor',
  templateUrl: './country-accessor.component.html',
  styleUrls: ['./country-accessor.component.scss'],
  providers: [COUNTRY_CONTROL_VALUE_ACCESSOR],
  animations: [
    trigger('selected', [
      state('*', style({ opacity: 1, transform: 'scale(1)' })),
      state('void', style({ opacity: 0, transform: 'scale(0)' })),
      transition(':enter', animate('350ms ease-in-out')),
      transition(':leave', animate('350ms ease-in-out')),
    ]),
  ],
})

export class CountryAccessorComponent implements ControlValueAccessor  {

  @Input() public formCreate!: FormGroup;
  public countries = [
    { code: 'RU', name: 'Russia' },
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'GB-ENG', name: 'England' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'SE', name: 'Sweden' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'DO', name: 'Dominican Republic' }
  ];
  public selected!: string;
  private onTouched!: Function;
  private onChanged!: Function;

  public selectCountry(code: string) {
    this.onTouched();
    this.selected = code;
    this.onChanged(code);
  }

  public writeValue(value: string): void {
    this.selected = value ?? 'RU';
  };

  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  };

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  };
}
