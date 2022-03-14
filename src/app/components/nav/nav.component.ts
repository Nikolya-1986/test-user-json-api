import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { logOut } from '../../store/auth/auth.actions';
import { AuthState } from '../../store/auth/auth.state';
import { selectIsAuthenticated } from '../../store/auth/auth.selector';
import { FacadeService } from 'src/app/services/facades/facade.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public logo: string = 'assets/images/logo.png';
  public isAuthenticated$!: Observable<boolean>;
  
  constructor(
    private _store: Store<AuthState>,
    public _fasades: FacadeService
  ) { }

  public ngOnInit(): void {
    this._fetchIsAuthenticated();
  };

  private _fetchIsAuthenticated(): Observable<boolean> {
    this.isAuthenticated$ = this._store.pipe(select(selectIsAuthenticated));
    
    return this.isAuthenticated$;
  };

  public logout(): void {
    this._store.dispatch(logOut());
  };

}


