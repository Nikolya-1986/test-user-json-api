import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const STATUS_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StatusAccessorComponent),
  multi: true,
};

@Component({
  selector: 'app-status-accessor',
  templateUrl: './status-accessor.component.html',
  styleUrls: ['./status-accessor.component.scss'],
  providers: [STATUS_CONTROL_VALUE_ACCESSOR],
})
export class StatusAccessorComponent implements ControlValueAccessor {

  private onChange!: Function; //функция обратного вызова при изменение пользовательского интерфейса
  private onTouch!: Function; //функция обратного вызова для регистрации касания элемента
  private status!: string; //это обновлённое значение к которому обращается класс
  public disabled!: boolean;

  constructor() { }

  public setLevel(value: string): void { //устанавливает значениея используемое ngModel элемента
    this.status = value;
    this.onChange(this.status);
    this.onTouch(this.status);
  };

  public writeValue(value: string): void { //запишет значение в представление, если изменения значения произойдёт в модели программно
    this.status = value;
  };

  public registerOnChange(value: Function): void { //когда значение в пользовательском интерфейсе изменяется, этот метод вызывает функцию обратного вызова
    this.onChange = value;
  };

  public registerOnTouched(value: Function): void { //при касании элемента этот метод вызывается
    this.onTouch = value;
  };

  public setDisabledState(value: boolean): void { //меняет состояния true <=> false
    this.disabled = value;
  };

  public isActive(value: string): boolean {
    return value === this.status;
  };
}
