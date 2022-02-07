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

  public pictures = [
    { src: './assets/images/single.jpg', name: 'sinle' },
    { src: './assets/images/married.jpg', name: 'married' },
    { src: './assets/images/divorced.jpg', name: 'divorced' },
  ];
  private onChange!: Function; //функция обратного вызова при изменение пользовательского интерфейса
  private onTouch!: Function; //функция обратного вызова для регистрации касания элемента
  public status!: string; //это обновлённое значение к которому обращается класс
  public disabled!: boolean;

  constructor() { }

  public selectedStatus(value: string): void { //устанавливает значениея используемое ngModel элемента
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
}
