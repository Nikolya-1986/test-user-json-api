import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { reduserUser } from './store/user/user.reducer';
import { UsersEffects } from './store/user/user.effects';
import { IsLoadingInterceptor } from './interseptors/isLoading.interceptor';

const ISLOADING_INTERSEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: IsLoadingInterceptor
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reduserUser),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UsersEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [ISLOADING_INTERSEPTOR],
  bootstrap: [AppComponent]
})
export class AppModule { }
