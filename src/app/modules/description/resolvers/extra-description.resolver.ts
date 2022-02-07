import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, first, Observable, tap } from "rxjs";

import { loadUserRequest } from "../../../store/user/user.actions";
import { getUserSelector } from "../../../store/user/user.selectors";
import AppUserState from "../../../store/user/user.state";

@Injectable()
export class ExtraDescriptionResolver implements Resolve<boolean> {

    constructor(
        private store: Store<AppUserState>
    ) { }

    resolve(activatedRoute: ActivatedRouteSnapshot): Observable<boolean> | any {
        
        const userId = activatedRoute.params['id'];

        return this.store.pipe(
            select(getUserSelector),
            tap(user => {
                if(user) {
                    console.log(user)
                    this.store.dispatch(loadUserRequest({ userId: userId }))
                }
            }),
            filter(user => !!user),
            first()
        )
    }
}