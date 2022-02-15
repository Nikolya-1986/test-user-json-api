import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { SingUpComponent } from './sing-up.component';

const routes: Routes = [
    {
        path: '', component: SingUpComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignUpRoutingModule { }