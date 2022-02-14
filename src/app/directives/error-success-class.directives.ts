import {Directive, HostBinding, Self} from '@angular/core';
import {NgControl} from '@angular/forms';

@Directive({
    selector: '[formControlName],[ngModel],[formControl]',
})
export class ErrorSuccessClassDirective {

    private control = this.controlDir.control;

    constructor(
        @Self() private controlDir: NgControl
    ) {}

    @HostBinding('class.has-error')
    get hasError(): boolean {
        return this.control ? this.control.invalid && this.control.touched : false;
    };

    @HostBinding('class.has-success')
    get hasSuccess(): boolean {
        return this.control ? this.control.valid && this.control.dirty : false;
    };

}