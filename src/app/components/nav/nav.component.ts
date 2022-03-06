import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Auth } from '../../interfaces/auth.interface';
import { logOut } from '../../store/auth/auth.actions';
import { AuthState } from '../../store/auth/auth.state';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public logo: string = 'assets/images/logo.png';
  public getState!: Observable<Auth>;
  public isAuthenticated!: Observable<boolean>;
  public auth = null;
  public errorMessage = null;
  
  constructor(
    private store: Store<AuthState>,
  ) { }

  public ngOnInit(): void {
  };

  public logout(event: Event): void {
    event.preventDefault();
    this.store.dispatch(logOut())
  };

}
