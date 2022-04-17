import { AbstractControl } from "@angular/forms";

export function lengthValidator(control: AbstractControl): { [key: string]: boolean } | null  {
    if(control.value && control.value.length === 0){
        return { 'isEmpty': true }
    };
    return null;
}