import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { forkJoin, Observable, of, Subject, takeUntil } from 'rxjs';
import { map, switchMap, tap } from "rxjs/operators";
import {  select, Store } from '@ngrx/store';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import { Position, PositionDTO } from '../../interfaces/position.interface';
import { UserStoreFacade } from '../../store/user/user-store.facade';
import { FacadeService } from '../../services/facades/facade.service';
import UserState from '../../store/user/user.state';
import * as fromUserActions from '../../store/user/user.actions';
import { EpisodeState } from 'src/app/store/episode/episode.state';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @ViewChild('modal', { read: ViewContainerRef, static: false })
  private viewContainerRef!: ViewContainerRef;
  public userDetails$!: Observable<UserDTO<Position> | any>;
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;
  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private _userStoreFacade: UserStoreFacade,
    private _activatedRoute: ActivatedRoute,
    private _storeUsers: Store<UserState>,
    private _episodeStore: Store<EpisodeState>,
    private _facadeService: FacadeService,
    private _userService: UserService,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this._downloadDataUserDetail();
  };

  private _downloadDataUserDetail(): Observable<UserDTO<Position>> {
    this.userDetails$ = this._activatedRoute.params.pipe(
      map((params: Params) => {
        const userId =  Number(params['id']);
        this._userStoreFacade.loadUser(userId);
        return userId;
      }),
      switchMap((userId: number) => this._userStoreFacade.getUser$),
      switchMap((user) => {
        const url = user?.position.url as string;
        console.log(url);
        
        const getPosition$ = this._userService.getPosition(url);
        const getUser$ = of(user);
        return forkJoin([getPosition$, getUser$]);
      }),
      map(([position, user]) => {
        const userWithPosition: UserDTO<Position> | any = {
          ...user,
          position,
        }
        console.log(userWithPosition);
        return userWithPosition;
      }),
    );
    return this.userDetails$;
  };

  public onPreviousImage({ previous, images }: { previous: number, images: Picture[] }): void {
    this.currentImage = previous < 0 ? images.length - 1 : previous;
  };

  public onNextImage({ next, images }: { next: number, images: Picture[] }): void {
    this.currentImage = next === images.length ? 0 : next;
  };

  public onOpenModalDeleteUser(user: UserDTO<PositionDTO>): void {
    this._facadeService.modalWindowUserDelete(
      this.viewContainerRef, 
      'Are you sure you want to delete the user?', 
      "Click the 'Confirm' button if you want to delete the user, otherwise click 'Cancel'.",
      user,
    )
    .pipe(
      takeUntil(this._destroy$),
    )
    .subscribe(() => {
      this._userStoreFacade.deleteUser(user.id);
    })
  };

  public onEditCurrentUser(id: number): void{
    this._router.navigate(['edit', id]);
  };

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
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