import { FormArray } from "@angular/forms";

export function lengthValidator(control: FormArray): { [key: string]: boolean } | null  {
    if(control.length !== 0){
        return { 'isEmpty': true }
    };
    return null;
}