import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import { EpisodeDTO } from '../../interfaces/episode.interface';
import { FacadeService } from '../../services/facades/facade.service';
import UserState from '../../store/user/user.state';
import * as fromUserSelectors from '../../store/user/user.selectors';
import * as fromUserActions from '../../store/user/user.actions';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @ViewChild('modal', { read: ViewContainerRef, static: false })
  private viewContainerRef!: ViewContainerRef;
  public userDetails$!: Observable<UserDTO<EpisodeDTO> | any>;
  public userId!: number;
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;
  public destroy$: Subject<boolean> = new Subject();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store<UserState>,
    private _facadeService: FacadeService,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this.fetchUserDetail();
  };

  private fetchUserDetail(): Observable<UserDTO<EpisodeDTO>> {
    this.userDetails$ = this._activatedRoute.params.pipe(
      map((params: Params) => {
        this.userId = Number(params['id']); 
        this._store.dispatch(fromUserActions.loadUserRequest({ userId: this.userId }));
        return this.userId;
      }),
      switchMap(() => this._store.select(fromUserSelectors.getUserSelector)),
      // tap(user => console.log(user)),
    )
    return this.userDetails$;
  };

  public onPreviousImage({ previous, images }: { previous: number, images: Picture[] }): void {
    this.currentImage = previous < 0 ? images.length - 1 : previous;
  };

  public onNextImage({ next, images }: { next: number, images: Picture[] }): void {
    this.currentImage = next === images.length ? 0 : next;
  };

  public onOpenModalDeleteUser(user: UserDTO<EpisodeDTO>): void {
    this._facadeService.modalWindowUserDelete(
      this.viewContainerRef, 
      'Are you sure you want to delete the user?', 
      "Click the 'Confirm' button if you want to delete the user, otherwise click 'Cancel'.",
      user,
    )
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(() => {
      this._store.dispatch(fromUserActions.deleteUserRequest({ userId: user.id }));
    })
  };

  public onEditCurrentUser(id: number): void{
    this._router.navigate(['edit', id]);
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  };
}

function indentify <T>(value: T): T {
  return value;
}
//Дженерики преобразуют функцию в зависимости от указанного типа данных, вожно создавать повторно используемые компоненты меняя их типы
//Способ сообщить классам, компонентам или интерфейсам какой тип необходимо использовать при их вызове, также как во время вызова мы
//сообщаем функции, какие значения использовать в качестве аргументов
console.log(indentify<Number>(85));
console.log(indentify<String>('Generic Type'));
console.log(indentify([69,96]));//тип можно не передовать, Type Script вычислит его сам по переданным данным