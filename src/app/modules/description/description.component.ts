import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { forkJoin, Observable, of, Subject, takeUntil } from 'rxjs';
import { map, switchMap, take, tap } from "rxjs/operators";

import { Picture, UserDTO } from '../../interfaces/user.interface';
import { Position, PositionDTO } from '../../interfaces/position.interface';
import { Location, LocationDTO } from '../../interfaces/location.interface';
import { UserStoreFacade } from '../../store/user/user-store.facade';
import { FacadeService } from '../../services/facades/facade.service';
import { UserService } from '../../services/user.service';
import { PositionStoreFacade } from 'src/app/store/position/position-store.facade';
import { LocationStoreFacade } from 'src/app/store/location/location-store.facade';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {

  @ViewChild('modal', { read: ViewContainerRef, static: false })

  private viewContainerRef!: ViewContainerRef;
  private _destroy$: Subject<boolean> = new Subject();
  public userDetails$!: Observable<UserDTO<Position, Location>>;
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;

  constructor(
    private _userStoreFacade: UserStoreFacade,
    private _positionStoreFacade: PositionStoreFacade,
    private _locationStoreFacade: LocationStoreFacade,
    private _activatedRoute: ActivatedRoute,
    private _facadeService: FacadeService,
    private _userService: UserService,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this._downloadDataUserDetail();
  };

  private _downloadDataUserDetail(): Observable<UserDTO<Position, Location>> {
    this.userDetails$ = this._activatedRoute.params.pipe(
      map((params: Params) => {
        const userId =  Number(params['id']);
        this._userStoreFacade.loadUser(userId);
        return userId;
      }),
      switchMap(() => this._userStoreFacade.getUser$),
      switchMap((user:  UserDTO<PositionDTO, LocationDTO> | any) => {
        this._positionStoreFacade.loadPosition(user?.position.url);
        this._locationStoreFacade.loadLocation(user?.location.id);
        const getPosition$ = this._facadeService.getUserPosition(user?.position.url);
        const getLocation$ = this._facadeService.getUserLocation(user?.location.id);
        const getUser$ = of(user);
        return forkJoin([getPosition$, getLocation$, getUser$]);
      }),
      map(([position, location, user]) => {
        const userAdditionalinfo: UserDTO<Position, Location> = {
          ...user,
          location,
          position,
        }
        console.log(userAdditionalinfo);
        
        return userAdditionalinfo;
      }),
      takeUntil(this._destroy$),
    )
    return this.userDetails$;
  };

  public onPreviousImage({ previous, images }: { previous: number, images: Picture[] }): void {
    this.currentImage = previous < 0 ? images.length - 1 : previous;
  };

  public onNextImage({ next, images }: { next: number, images: Picture[] }): void {
    this.currentImage = next === images.length ? 0 : next;
  };

  public onOpenModalDeleteUser(user: UserDTO<PositionDTO, LocationDTO>): void {
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

  public onEditCurrentUser(id: number): void {
    this._router.navigate(['edit', id]);
  };

  public onGetResidentName(id: number): void {
    this._router.navigate(['description', id]);
  };

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  };
}


