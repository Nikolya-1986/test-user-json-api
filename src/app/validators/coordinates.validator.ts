import { AbstractControl } from "@angular/forms";

export function coordinatesValidator(control: AbstractControl): { [key: string]: boolean } | null {

    const coordinatesPatern = /image\/*/;
    if(control.value){
        return { 'ivalidCoordinates': true }
    }
    return null;
}