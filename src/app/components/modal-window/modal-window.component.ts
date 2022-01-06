import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalWindowService } from '../../services/modal-window.service/modal-window.servise';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any,
    private modalWindowService: ModalWindowService
  ) {
    console.log(modalData);
  }

  public actionConfirm(): void {
    this.modalWindowService.modalAction(this.modalData);
    this.closeModal();
  };

  public closeModal(): void {
    this.dialogRef.close();
  }
}
