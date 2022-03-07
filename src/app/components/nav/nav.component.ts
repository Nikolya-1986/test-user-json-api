import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Auth } from '../../interfaces/auth.interface';
import { logOut } from '../../store/auth/auth.actions';
import AppAuthState from '../../store/auth/auth.state';
import { getAuthState } from '../../store/auth/auth.selector';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public logo: string = 'assets/images/logo.png';
  public getState: Observable<Auth | any>;
  public isAuthenticated!: boolean;
  public auth = null;
  public errorMessage = null;
  
  constructor(
    private store: Store<AppAuthState>,
  ) { 
    this.getState = this.store.select(getAuthState);
  }

  public ngOnInit(): void {
    this.fetchState();
  };

  private fetchState(): Observable<Auth | any> {
    this.getState.subscribe((state: any) => {
      this.isAuthenticated = state.isAuthenticated;
      this.auth = state.auth;
      this.errorMessage = state.errorMessage;
    });
    return this.getState;
  };

  public logout(event: Event): void {
    event.preventDefault();
    this.store.dispatch(logOut())
  };

}


