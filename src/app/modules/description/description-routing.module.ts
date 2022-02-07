import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { DescriptionComponent } from './description.component';
import { ExtraComponent } from './components/extra/extra.component';
import { ExtraDescriptionResolver } from './resolvers/extra-description.resolver';

const routes: Routes = [
    {
        path: '', 
        component: DescriptionComponent, 
        children: [
            { path: 'extra', component: ExtraComponent, resolve: { extraDescription: ExtraDescriptionResolver } }
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DescriptionRoutingModule { }