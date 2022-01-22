import { AbstractControl } from "@angular/forms";

export function coordinatesValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const coordinatesPatern = /^-?[0-9]{1,3}(?:\.[0-9]{1,10})?$/;
    if(control.value && !coordinatesPatern.test(control.value)){
        return { 'ivalidCoordinates': true }
    };
    
    return null;
}

// -? # принимать отрицательные значения
// ^ # Начало строки
// [0-9]{1,3} # матч 1-3 цифры
// (?: # Стараться соответствовать...
// \ . # десятичной точки
// [0-9]{1,10} # следуют один до 10 цифр 
// )? # ...при необходимости
// $ # Конец строки