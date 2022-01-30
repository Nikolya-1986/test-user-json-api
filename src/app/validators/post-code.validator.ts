import { AbstractControl } from "@angular/forms";

export function postCodeValidator(control: AbstractControl): { [key: string]: boolean} | null {

    if(control.value && (control.value.length < 4 || control.value.length > 6)){
        return { 'postCodeInvalid': true };
    };
    return null;
}