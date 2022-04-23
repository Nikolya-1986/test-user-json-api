import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[phoneValidatorDIR]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneValidatorDirective,
        multi: true,
    }]
})
export class PhoneValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: boolean } | null  {
        const phone_pattern = /^[0-9]{3}\-([0-9]{3})\-[0-9]{4}$/;
        if(control.value && !phone_pattern.test(control.value)) {
            return { 'invalidPhone': true }
        };
        
        return null;
    }
    
}