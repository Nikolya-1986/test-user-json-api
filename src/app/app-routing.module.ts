import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './components/error/error.component';
import { AuthGuardService as AuthGuard } from './modules/auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule), canActivate: [AuthGuard]
  },
  {
    path: 'description/:id', loadChildren: () => import('./modules/description/description.module').then(module => module.DescriptionModule),
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'edit/:id', loadChildren: () => import('./modules/edit/edit.module').then(module => module.EditModule),canActivate: [AuthGuard]
  },
  {
    path: 'create', loadChildren: () => import('./modules/create/create.module').then(module => module.CreateModule), canActivate: [AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'error', component: ErrorComponent 
  },
  { 
    path: '**', redirectTo: '/error'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
