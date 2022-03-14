import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { FacadeService } from "../services/facades/facade.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _facadeService: FacadeService,
    ){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this._facadeService.getToken();
        const autRequest = request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(autRequest);
    };
}