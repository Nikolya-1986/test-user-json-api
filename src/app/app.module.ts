import { NgModule, Provider, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';

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
import { UserReducer } from './store/user/user.reducer';
import { UsersEffects } from './store/user/user.effects';
import { IsLoadingInterceptor } from './interseptors/isLoading.interceptor';
import { MaterialExampleModule } from './material-example.module';
import { CustomSerializer } from './store/router/custom-serializer';
import { AuthGuardService as AuthGuard } from './modules/auth/services/auth-guard.service';
import { AuthInterceptor } from './interseptors/auth.interceptor';
import { ErrorInterceptor } from './interseptors/error.Interceptor';

const ISLOADING_INTERSEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: IsLoadingInterceptor,
};

const AUTH_INTERSEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

const ERROR_INTERSEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: ErrorInterceptor,
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
    BrowserAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
    MaterialExampleModule,
    StoreModule.forRoot(UserReducer),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production 
    }),
    EffectsModule.forRoot([UsersEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer,
    }),
  ],
  providers: [
    AuthGuard,
    AUTH_INTERSEPTOR,
    ISLOADING_INTERSEPTOR,
    ERROR_INTERSEPTOR,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
