import { AbstractControl } from "@angular/forms";

export function phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const phone_pattern = /^\(\d{3}\)\s\d{3}\s-\s\d{4}/g;

    if(control.value && phone_pattern.test(control.value)) {
        return { 'invalidPhone': true }
    }
    
    return null;
}