import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ModalWindowComponent } from '../components/modal-window/modal-window.component';
import { UserDTO } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  private _componentRef!: ComponentRef<ModalWindowComponent>;
  private _subject$!: Subject<string>;

  constructor(
    private _resolver: ComponentFactoryResolver,
  ){}

  public modalWindowUserDelete(viewContainerRef: ViewContainerRef, modalTitle: string, modalBody: string, user: UserDTO): Observable<string>{
    const modalFactory  = this._resolver.resolveComponentFactory(ModalWindowComponent);
    this._componentRef = viewContainerRef.createComponent(modalFactory);
    this._componentRef.instance.title = modalTitle;
    this._componentRef.instance.body = modalBody;
    this._componentRef.instance.name = user.name.first;
    this._componentRef.instance.cancelAction.subscribe(() => this._closeModal());
    this._componentRef.instance.confirmAction.subscribe(() => this._confirm());
    this._subject$ = new Subject<string>();
    return this._subject$.asObservable();
  };

  private _closeModal(): void {
    this._subject$.complete();
    this._componentRef.destroy();
  };

  private _confirm(): void {
    this._subject$.next('Confirmed action');
    this._closeModal();
    this._subject$.unsubscribe();
  };
  
}