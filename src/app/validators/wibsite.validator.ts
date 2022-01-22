import { AbstractControl } from "@angular/forms";

export function websiteValidator(control: AbstractControl): { [key: string]: any } | null {

    if(!control.value.startsWith('http') || !control.value.includes('.com')) {
        return { 'invlidUrl': true };
    }
    return null;
}//-