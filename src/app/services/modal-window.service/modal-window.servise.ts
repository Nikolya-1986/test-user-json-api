import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  constructor() { }

  public modalAction(modalData: any): void {
    switch (modalData.name) {

      case "Delete":
        this.deleteUser(modalData);
        break;
        
      default:
        break;
    }
  };

  private deleteUser(modalData: any): void {
    alert(`User with ID ${modalData.userId} has been deleted.`)
  }
}