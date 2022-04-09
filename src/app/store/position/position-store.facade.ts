import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { PositionState } from "./position.state";
import * as fromPositionActions from "./position.actions";
import * as fromPositionSelectors from "./position.selectors";

@Injectable({ 
    providedIn: 'root' 
})
export class PositionStoreFacade {

    public position$ = this._storePosition.pipe(select(fromPositionSelectors.getPosition)); 
    public error$ = this._storePosition.pipe(select(fromPositionSelectors.getFail));
    
    constructor(
        private _storePosition: Store<PositionState>,
    ) {}

    public loadPosition(url: string): void {
        this._storePosition.dispatch(fromPositionActions.loadPositionRequest({ url }));
    };

}