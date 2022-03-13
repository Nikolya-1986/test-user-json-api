import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';
import * as userActions from '../../store/user/user.actions';
import { ModalWindowService } from '../../services/modal-window.servise';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @ViewChild('modal', { read: ViewContainerRef, static: false })
  private viewContainerRef!: ViewContainerRef;
  public userDetails$!: Observable<UserDTO | any>;
  public userId!: number;
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;
  public destroy$: Subject<boolean> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
    public modalWindowServise: ModalWindowService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.fetchUserDetail();
  };

  private fetchUserDetail(): Observable<UserDTO> {
    this.userDetails$ = this.activatedRoute.params.pipe(
      map((params: Params) => {
        this.userId = Number(params['id']); 
        this.store.dispatch(userActions.loadUserRequest({ userId: this.userId }));
        return this.userId;
      }),
      switchMap(() => this.store.select(userSelectors.getUserSelector)),
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

  public onOpenModalDeleteUser(user: UserDTO): void {
    this.modalWindowServise.modalWindowUserDelete(
      this.viewContainerRef, 
      'Are you sure you want to delete the user?', 
      "Click the 'Confirm' button if you want to delete the user, otherwise click 'Cancel'.",
      user,
    )
    .pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(() => {
      this.store.dispatch(userActions.deleteUserRequest({ userId: user.id }));
    })
  };

  public onEditCurrentUser(id: number): void{
    this.router.navigate(['edit', id]);
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  };
}
