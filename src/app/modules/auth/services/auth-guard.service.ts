import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

import { FacadeService } from "../../../services/facades/facade.service";


@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private _facadeService: FacadeService,
        private _router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this._facadeService.getToken()) {
            this._router.createUrlTree(['auth']);
            return false;
        }
        return true;
    }
    
} 