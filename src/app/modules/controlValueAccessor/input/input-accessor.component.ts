import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, DefaultValueAccessor, NgControl, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

import { EmailAsyncValidator } from '../../../validators/email-async.validator';

@Component({
  selector: 'app-input-accessor',
  templateUrl: './input-accessor.component.html',
  styleUrls: ['./input-accessor.component.scss'],
  animations: [
    trigger(
      'visibilityChanged', [
        state('true', style({'height': '*', 'padding-top': '4px'})),
        state('true', style({'height': '30px', 'padding-top': '0px', 'margin-bottom': '5px'})),
        transition('*=>*', animate('1000ms')),
      ]
    )
  ]
})
export class InputAccessorComponent implements ControlValueAccessor, Validator, OnInit, AfterViewInit, OnDestroy {

  @ViewChild('inputName') inputName!: ElementRef;
  @ViewChild(DefaultValueAccessor) defaultValueAccessor!: DefaultValueAccessor;
  @Input() public type = 'text';
  @Input() public isRequired!: boolean;
  @Input() public patternLettersNumbers!: string;
  @Input() public patternLetters!: string;
  @Input() public patternCapitalLetters!: string;
  @Input() public emailPattern!: string;
  @Input() public passwordPattern!: string;
  @Input() public patternNumbers!: string;
  @Input() public patternMinLength!: number;
  @Input() public patternMaxLength!: number;
  @Input() public label!: string;
  @Input() public placeholder!: string;
  public destroy$: Subject<boolean> = new Subject;
  public disabled!: boolean;
  private delegatedReplaySubject = new ReplaySubject<(_: ControlValueAccessor) => void>();
  
  constructor(
    @Self() @Optional() public controlDir: NgControl,
    public emailAsyncValidator: EmailAsyncValidator,
  ) {
    this.controlDir.valueAccessor = this;
  };

  public ngOnInit(): void {
    this.validate();
  };

  public ngAfterViewInit(): void {
    this.delegatedReplaySubject.pipe(
      takeUntil(this.destroy$),
    ).subscribe(res => res(this.defaultValueAccessor));
  };

  public writeValue(value: string): void {
    if(this.inputName){
      this.delegatedReplaySubject.next(valueAccessor => valueAccessor.writeValue(this.inputName.nativeElement.value));
    }
  };

  public registerOnChange(value: (_: any) => void): void {
    this.delegatedReplaySubject.next(() => this.onChange = value);
  };


  public registerOnTouched(value: () => void): void {
    this.delegatedReplaySubject.next(() => this.onTouched = value);
  };

  public setDisabledState?(isDisabled: boolean): void {
    this.delegatedReplaySubject.next(() => this.disabled = isDisabled);
  };

  public onChange(event: any) { };

  public onTouched() { };

  public validate(): ValidationErrors {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator ? [control.validator] : [];

    if(this.isRequired) {
      validators.push(Validators.required);
    }
    if(this.patternLettersNumbers) {
      validators.push(Validators.pattern(this.patternLettersNumbers));
    }
    if(this.patternLetters) {
      validators.push(Validators.pattern(this.patternLetters));
    }
    if(this.patternNumbers) {
      validators.push(Validators.pattern(this.patternNumbers));
    }
    if(this.patternMinLength) {
      validators.push(Validators.minLength(this.patternMinLength));
    }
    if(this.emailPattern) {
      validators.push(Validators.pattern(this.emailPattern));
    }
    // if (this.emailAsyncValidator) {
    //   validators.push(this.emailAsyncValidator.validate.bind(this.emailAsyncValidator));
    // }
    if(this.passwordPattern) {
      validators.push(Validators.pattern(this.passwordPattern));
    }
    if(this.patternMaxLength) {
      validators.push(Validators.maxLength(this.patternMaxLength));
    }
    if(this.patternCapitalLetters) {
      validators.push(Validators.pattern(this.patternCapitalLetters));
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();

    return validators;
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  };
}
//NgControl уже предоставляет NG_VALUE_ACCESSOR, NG_VALIDATOR и NG_ASYNC_VALIDATORS. ОБЯЗАТЕЛЬНО удаляем их, чтобы не возникла циклическая зависимость!!!