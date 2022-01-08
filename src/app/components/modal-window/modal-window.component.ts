import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {
  
  @Input() public title: string = '';
  @Input() public body: string = '';
  @Input() public name: string = 'User name';
  @Output() public cancelAction = new EventEmitter();
  @Output() public confirmAction = new EventEmitter();

  public cancel(): void  {
      this.cancelAction.emit();
  } 

  public confirm(): void {
      this.confirmAction.emit();
  }
}
