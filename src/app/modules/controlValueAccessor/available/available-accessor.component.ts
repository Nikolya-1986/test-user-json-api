import { Component, forwardRef, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const AVAILABLE_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AvailableAccessorComponent),
  multi: true,
};

@Component({
  selector: 'app-available-accessor',
  templateUrl: './available-accessor.component.html',
  styleUrls: ['./available-accessor.component.scss'],
  providers: [AVAILABLE_CONTROL_VALUE_ACCESSOR],
})
export class AvailableAccessorComponent implements ControlValueAccessor {

  public pictures = [
    { src: './assets/images/true.png', name: 'true' },
    { src: './assets/images/false.png', name: 'false' },
  ];
  public available!: string;
  private onTouched!: Function;
  private onChanged!: Function;

  public selectedAvailable(src: string): void {
    this.onTouched(src);
    this.available = src;
    this.onChanged(src);
  };

  public writeValue(value: string): void {
    this.available = value;
  };

  public registerOnChange(value: Function): void {
    this.onChanged = value;
  };

  public registerOnTouched(value: Function): void {
    this.onTouched = value
  };
}
