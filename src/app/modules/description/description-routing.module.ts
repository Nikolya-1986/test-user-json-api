import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { DescriptionComponent } from './description.component';
import { ExtraComponent } from './components/extra/extra.component';

const childRouters: Routes =[
    {
        path: 'extra', component: ExtraComponent
    }
];

const routes: Routes = [
    {
        path: '', component: DescriptionComponent, children: childRouters
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DescriptionRoutingModule { }