import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { finalize, Observable } from "rxjs";

import * as userActions from "../store/user/user.actions";
import AppUserState from "../store/user/user.state";

@Injectable()
export class IsLoadingInterceptor implements HttpInterceptor {

    constructor(
        private store: Store<AppUserState>
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.store.dispatch(userActions.loadStart());

        return next.handle(req).pipe(
            finalize(() => {
                this.store.dispatch(userActions.loadEnd())
            })
        )
    }
}