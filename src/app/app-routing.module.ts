import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'description/:id', loadChildren: () => import('./modules/description/description.module').then(module => module.DescriptionModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
