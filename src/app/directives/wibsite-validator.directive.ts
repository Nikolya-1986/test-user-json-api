import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[websiteValidatorDIR]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: WebsiteValidatorDirective,
        multi: true,
    }]
})
export class WebsiteValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null  {
        if(!control.value.startsWith('http://') || !control.value.includes('.com')) {
            return { 'invlidUrl': true };
        }
        return null;
    }

}