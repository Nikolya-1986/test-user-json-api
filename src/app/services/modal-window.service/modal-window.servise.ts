import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ModalWindowComponent } from '../../components/modal-window/modal-window.component';
import { UserDTO } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  private componentRef!: ComponentRef<ModalWindowComponent>;
  private subject$!: Subject<string>;

  constructor(
    private resolver: ComponentFactoryResolver,
  ){}

  public modalWindowUserDelete(viewContainerRef: ViewContainerRef, modalTitle: string, modalBody: string, user: UserDTO): Observable<string>{
    const modalFactory  = this.resolver.resolveComponentFactory(ModalWindowComponent);
    this.componentRef = viewContainerRef.createComponent(modalFactory);
    this.componentRef.instance.title = modalTitle;
    this.componentRef.instance.body = modalBody;
    this.componentRef.instance.name = user.name.first;
    this.componentRef.instance.cancelAction.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmAction.subscribe(() => this.confirm());
    this.subject$ = new Subject<string>();
    return this.subject$.asObservable();
  }

  private closeModal(): void {
    this.subject$.complete();
    this.componentRef.destroy();
  };

  private confirm(): void {
    this.subject$.next('Confirmed action');
    this.closeModal();
    this.subject$.unsubscribe();
  }
}