import { AbstractControl } from "@angular/forms";

export function phoneValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const phone_pattern = /^[0-9]{3}\-([0-9]{3})\-[0-9]{4}$/;

    if(control.value && phone_pattern.test(control.value)) {
        return { 'invalidPhone': true }
    };
    
    return null;
}