import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[lengthValidatorDIR]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: LengthValidatorDirective,
        multi: true,
    }]
})
export class LengthValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: boolean } | null  {
        if(control.value && control.value.length === 0){
            return { 'isEmpty': true }
        };
        return null;
    }
    
}