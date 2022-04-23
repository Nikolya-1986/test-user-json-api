import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";
import * as moment from 'moment';

@Directive({
    selector: '[dateBirthdayValidatorDIR]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: DateBirthdayValidatorDirective,
        multi: true,
    }]
})
export class DateBirthdayValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: boolean } | null  {
        if (control.value) {
            const date = moment(control.value);
            const today = moment();
            if (date.isAfter(today)) {
                return { 'invalidDate': true }
            }
        };
        return null;
    }
    
}