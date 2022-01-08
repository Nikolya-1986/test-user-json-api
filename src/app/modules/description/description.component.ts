import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';
import * as userActions from '../../store/user/user.actions';
import { ModalWindowService } from '../../services/modal-window.service/modal-window.servise';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @ViewChild('modal', { read: ViewContainerRef, static: false })
  private viewContainerRef!: ViewContainerRef;
  public userDetails$!: Observable<UserDTO | any>
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;
  public destroy$: Subject<boolean> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
    public modalWindowServise: ModalWindowService,
  ) { }

  public ngOnInit(): void {
    this.getUserDetail();
  };

  public getUserDetail(): void {
    this.userDetails$ = this.activatedRoute.params.pipe(
      map((userId: Params) => Number(userId['id'])),
      switchMap((id: number) => this.store.pipe(select(userSelectors.getUserSelector(id)))),
      tap(user => console.log(user))
    )
  };

  public onPreviousImage({ previous, images }: { previous: number, images: Picture[] }): void {
    this.currentImage = previous < 0 ? images.length - 1 : previous 
  };

  public onNextImage({ next, images }: { next: number, images: Picture[] }): void {
    this.currentImage = next === images.length ? 0 : next
  };

  public onOpenModalDeleteUser(user: UserDTO): void {
    this.modalWindowServise.modalWindowUserDelete(
      this.viewContainerRef, 
      'Are you sure you want to delete the user?', 
      "Click the 'Confirm' button if you want to delete the user, otherwise click 'Cancel'.",
      user
    )
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(() => {
      this.store.dispatch(userActions.DeleteUserRequest({ userId: user.id }))
    })
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
