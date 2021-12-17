import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserDTO } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public users$!: UserDTO[];
  public isLoading$!: boolean;
  public error$: string = '';
  public destroy$: Subject<boolean> = new Subject();

  constructor(
    private userService: UserService
  ) {}

  public ngOnInit(): void {
    this.fetchAllUsers();
  };

  public fetchAllUsers(): UserDTO[] | any {
    this.isLoading$ = true;
    this.userService.getUsers().pipe(
      takeUntil(this.destroy$),
    )
    .subscribe(users => {
      this.users$ = users;
      this.isLoading$ = false;
    },(errorFromBackend) => {
      this.isLoading$ = false;
      this.error$ = errorFromBackend.message
    })
  };

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  };
}
