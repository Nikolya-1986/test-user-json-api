import { Directive } from "@angular/core";
import { AbstractControl, Validator, NG_VALIDATORS } from "@angular/forms";

@Directive({
    selector: '[imageValidatorDIR]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ImageValidatorDirective,
        multi: true,
    }]
})
export class ImageValidatorDirective implements Validator {

    validate(control: AbstractControl): { [key: string]: any } | null  {
        const MAX_FILE_SIZE: number = 1000000;
    
        if(!control.value){
            return { 'noFile': true }
        } else if(control.value.loaded > MAX_FILE_SIZE){
            return { 'fileToBig': true }
        }
        
        return null;
    }
    
}