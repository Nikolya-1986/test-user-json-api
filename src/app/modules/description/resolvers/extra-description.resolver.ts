import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { filter, first, Observable, tap } from "rxjs";
import { UserDTO } from "src/app/interfaces/user.interface";
 
import { loadUserRequest } from "../../../store/user/user.actions";
import { getUserSelector } from "../../../store/user/user.selectors";
import AppUserState from "../../../store/user/user.state";
 
@Injectable()
export class ExtraDescriptionResolver implements Resolve<UserDTO> {
 
    constructor(
        private store: Store<AppUserState>
    ) { }
    
    resolve(activatedRoute: ActivatedRouteSnapshot): Observable<UserDTO> | any {
    
        const userId = activatedRoute.params['id'];
    
        return this.store.pipe(
            select(getUserSelector),
            tap(user => {
                if(!user) {
                    this.store.dispatch(loadUserRequest({ userId: userId }))
                }
            }),
            filter(user => !!user),
            first(),
        )
    };
 
}