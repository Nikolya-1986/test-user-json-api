import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox-accessor',
  templateUrl: './checkbox-accessor.component.html',
  styleUrls: ['./checkbox-accessor.component.scss'],
})

export class CheckboxAccessorComponent implements OnInit, ControlValueAccessor {

  @Input() public isRequired!: boolean;
  @Input() public type = 'type';
  @Input() public label!: string; //это обновлённое значение к которому обращается класс
  @Input() public isAppeal!: boolean;
  @Input() public isGender!: boolean;
  @Input() public isStatus!: boolean;
  @Input() public isAvailable!: boolean;
  
  public disabled!: boolean;
  public valueCurrent!: string | any;
  public picturesAppeal = [
    { src: './assets/images/Mr.jpg', name: 'Mr' },
    { src: './assets/images/Miss.jpg', name: 'Miss' },
    { src: './assets/images/Ms.jpg', name: 'Ms' },
    { src: './assets/images/Mrs.jpg', name: 'Mrs' },
  ];
  public picturesGender = [
    { src: './assets/images/female.jpg', name: 'female' },
    { src: './assets/images/male.jpg', name: 'male' },
    { src: './assets/images/intersex.jpg', name: 'intersex' },
  ];
  public picturesStatus = [
    { src: './assets/images/single.jpg', name: 'sinle' },
    { src: './assets/images/married.jpg', name: 'married' },
    { src: './assets/images/divorced.jpg', name: 'divorced' },
  ];
  public picturesAvailable = [
    { src: './assets/images/true.png', name: 'true' },
    { src: './assets/images/false.png', name: 'false' },
  ];

  constructor(
    @Self() public controlDir: NgControl,
  ) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    this.validate();
  }

  public selectedValue(value: string): void { //устанавливает значениея используемое ngModel элемента
    this.valueCurrent = value;
    this.onChange(this.valueCurrent);
    this.onTouched(); 
  }; 

  public writeValue(value: string): void { //запишет значение в представление, если изменения значения произойдёт в модели программно
    this.valueCurrent = value;
  }; 

  public registerOnChange(value: any): void { //когда значение в пользовательском интерфейсе изменяется, этот метод вызывает функцию обратного вызова
    this.onChange = value;
  };

  public registerOnTouched(value: any): void { //при касании элемента этот метод вызывается
    this.onTouched = value;
  };

  public setDisabledState?(isDisabled: boolean): void { //меняет состояния true <=> false
    this.disabled = isDisabled;
  };

  public onChange(event: any) { }; //функция обратного вызова при изменение пользовательского интерфейса

  public onTouched() { };//функция обратного вызова для регистрации касания элемента

  public validate(): ValidationErrors {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator ? [control.validator] : [];

    if(this.isRequired) {
      validators.push(Validators.required);
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();

    return validators;
  };
}
