import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, Subject, switchMap, tap } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { Picture, UserDTO } from '../../interfaces/user.interface';
import AppUserState from '../../store/user/user.state';
import * as userSelectors from '../../store/user/user.selectors';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalWindowComponent } from '../../components/modal-window/modal-window.component';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public userDetails$!: Observable<UserDTO | any>
  public showTable!: boolean;
  public showText!: boolean;
  public currentImage: number = 0;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppUserState>,
    public matDialog: MatDialog
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

  public onOpenModalDeleteUser({ userId, userName }: { userId: number, userName: string }): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    dialogConfig.data = {
      name: 'Delete',
      title: `Are you sure you want to delete the user: ${userName}?`,
      description: "Click the 'Delete' button if you want to delete the user, otherwise click 'Cancel'.",
      actionButtonText: 'Delete',
      userId: userId,
      userName: userName
    }
    const modalDialog = this.matDialog.open(ModalWindowComponent, dialogConfig);
  }
}
