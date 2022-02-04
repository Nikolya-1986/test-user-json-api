// import {Directive, ElementRef, Renderer2, forwardRef} from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// export const CHECKBOX_VALUE_ACCESSOR: any = {
//     provide: NG_VALUE_ACCESSOR,
//     useExisting: forwardRef(() => CheckboxControlValueAccessor),
//     multi: true, 
// }; 

// @Directive({
// selector : `checkboxValueAccessor`,
//   host : {
//     '(change)': 'onChange($event.target.checked)',
//     '(blur)'  : 'onTouched()'
//   }
//   ,
//   providers: [CHECKBOX_VALUE_ACCESSOR]
// }) 

// export class CheckboxControlValueAccessor implements ControlValueAccessor {

//     onChange = (_: any) => {};
//     onTouched = () => {}; 
//     constructor(private _renderer: Renderer2, private _elementRef: ElementRef) {}

//     writeValue(value: any): void {
//         this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
//     } 

//     registerOnChange(value: (_: any) => {}): void {
//         this.onChange = value; 
//     }
 
//     registerOnTouched(value: () => {}): void {
//         this.onTouched = value; 
//     } 

//     setDisabledState(isDisabled: boolean): void { 
//         this._renderer.setProperty(this._elementRef.nativeElement, 'disabled',  isDisabled);
//     }
// }
