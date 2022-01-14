import { AbstractControl } from "@angular/forms";
import * as moment from 'moment';

export function dateValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value) {
        const date = moment(control.value);
        const today = moment();
        if (date.isAfter(today)) {
            return { 'invalidDate': true }
        }
    }
    return null;
}