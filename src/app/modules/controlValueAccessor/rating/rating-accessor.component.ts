import { Component, forwardRef, HostBinding, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const RAITING_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RatingAccessorComponent),
  multi: true,
};

@Component({
  selector: 'app-rating-accessor',
  templateUrl: './rating-accessor.component.html',
  styleUrls: ['./rating-accessor.component.scss'],
  providers: [RAITING_CONTROL_VALUE_ACCESSOR],
})
export class RatingAccessorComponent implements ControlValueAccessor {

  @Input() public disabled = false;
  @HostBinding('style.opacity')
  public stars: boolean[] = Array(5).fill(false);

  get opacity() {
    return this.disabled ? 0.25 : 1;
  };

  public onChange = (rating: number) => {};
  public onTouched = () => {};

  get value(): number {
    return this.stars.reduce((total, starred) => {
      return total + (starred ? 1 : 0);
    }, 0);
  };

  public rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  };

  public writeValue(rating: number): void {
    this.stars = this.stars.map((_, i) => rating > i);
    this.onChange(this.value);
  };

  public registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  };

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  };

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  };

}
