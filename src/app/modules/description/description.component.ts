import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { map, mergeMap, Observable, Subject, Subscription, switchMap, takeUntil, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';
import * as userActions from '../../store/user/user.actions';
import { ModalWindowService } from '../../services/modal-window.service/modal-window.servise';

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
  public navigationSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
    public modalWindowServise: ModalWindowService,
    private router: Router,
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.router.navigated = false
      }
    });
  }

  public ngOnInit(): void {
    this.getUserDetail();
  };

  private getUserDetail(): Observable<UserDTO> {
    this.userDetails$ = this.activatedRoute.params.pipe(
      map((params: Params) =>  Number(params['id'])),
      switchMap((id: number) => this.store.pipe(select(userSelectors.getUserSelector(id)))),
      tap(user => console.log(user)),
    ),
    this.store.dispatch(userActions.LoadUserRequest({ userId: this.userId }));
    console.log(this.userId)
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
      this.store.dispatch(userActions.DeleteUserRequest({ userId: user.id }));
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
