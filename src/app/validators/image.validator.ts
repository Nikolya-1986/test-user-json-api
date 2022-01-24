import { AbstractControl } from "@angular/forms";

export function imageValidator(control: AbstractControl) {

    const MAX_FILE_SIZE: number = 1000000;
    const typeFile = /image\/*/;
    
    if(!control.value){
        return {
            noFile: true,
        }
    }

    else if(control.value.loaded > MAX_FILE_SIZE){
        return {
            fileToBig: true,
        }
    }

    else if(!typeFile.test(control.value)){
        return {
            onlyImage: true
        }
    }
    
    return null;
}