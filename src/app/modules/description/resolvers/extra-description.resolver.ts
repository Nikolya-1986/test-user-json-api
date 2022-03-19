import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, first, Observable, tap } from "rxjs";

import { EpisodeDTO } from "../../../interfaces/episode.interface";
import { UserDTO } from "../../../interfaces/user.interface";
import UserState from "../../../store/user/user.state";
import * as fromUserActions from "../../../store/user/user.actions";
import * as fromUserSelectors from "../../../store/user/user.selectors";

 
@Injectable()
export class ExtraDescriptionResolver implements Resolve<UserDTO<EpisodeDTO>> {
 
    constructor(
        private store: Store<UserState>
    ) { }
    
    resolve(activatedRoute: ActivatedRouteSnapshot): Observable<UserDTO<EpisodeDTO>> | any {
    
        const userId = activatedRoute.params['id'];
    
        return this.store.pipe(
            select(fromUserSelectors.getUserSelector),
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