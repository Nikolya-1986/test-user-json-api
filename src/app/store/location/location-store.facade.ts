import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { LocationState } from "./location.state";

import * as fromLocationActions from "./location.actions";
import * as fromLocationSelectors from "./location.selectors";

@Injectable({ 
    providedIn: 'root' 
})
export class LocationStoreFacade {

    public location$ = this._storeLocation.pipe(select(fromLocationSelectors.getLocation)); 
    public error$ = this._storeLocation.pipe(select(fromLocationSelectors.getFail));
    
    constructor(
        private _storeLocation: Store<LocationState>,
    ) {}

    public loadLocation(id: string): void {
        this._storeLocation.dispatch(fromLocationActions.loadLocationRequest({ id }));
    };

}