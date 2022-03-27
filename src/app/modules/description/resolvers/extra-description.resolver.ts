import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, first, Observable, tap } from "rxjs";

import { Position } from "../../../interfaces/position.interface";
import { UserDTO } from "../../../interfaces/user.interface";
import UserState from "../../../store/user/user.state";
import * as fromUserActions from "../../../store/user/user.actions";
import * as fromUserSelectors from "../../../store/user/user.selectors";
 
@Injectable()
export class ExtraDescriptionResolver implements Resolve<UserDTO<Position>> {
 
    constructor(
        private store: Store<UserState>
    ) { }
    
    resolve(activatedRoute: ActivatedRouteSnapshot): Observable<UserDTO<Position>> | any {
    
        const userId = activatedRoute.params['id'];
    
        return this.store.pipe(
            select(fromUserSelectors.getUser),
            tap(user => {
                if(!user) {
                    this.store.dispatch(fromUserActions.loadUserRequest({ userId: userId }))
                }
            }),
            filter(user => !!user),
            first(),
        )
    };
 
}