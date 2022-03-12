import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Auth } from '../../interfaces/auth.interface';
import { logOut } from '../../store/auth/auth.actions';
import { AuthState } from '../../store/auth/auth.state';
import { getAuthState } from '../../store/auth/auth.selector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  public logo: string = 'assets/images/logo.png';
  public getState: Observable<Auth | any>;
  public isAuthenticated: boolean = false;
  public auth = null;
  public errorMessage = null;
  private _destroy$: Subject<boolean> = new Subject();
  
  constructor(
    private _store: Store<AuthState>,
  ) { 
    this.getState = this._store.select(getAuthState);
  }

  public ngOnInit(): void {
    this._fetchState();
  };

  private _fetchState(): Observable<Auth | any> {
    this.getState.pipe(
      takeUntil(this._destroy$),
    ).subscribe((state: Auth | any) => {
      this.isAuthenticated = state.isAuthenticated;
      this.auth = state.auth;
      this.errorMessage = state.errorMessage;
    });
    return this.getState;
  };

  public logout(event: Event): void {
    // event.preventDefault();
    this._store.dispatch(logOut());
  };

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  };

}


