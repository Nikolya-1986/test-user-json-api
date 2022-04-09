import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";

import { FacadeService } from "../../services/facades/facade.service";
import * as fromPositionActions from "./position.actions";

@Injectable()
export class PositionEffects {

    loadPosition$: Observable<Action> = createEffect(() => {
        return this._actions$.pipe(
            ofType(fromPositionActions.PositionActionsType.LOAD_POSITION_REQUEST),
            switchMap((action: any) => this._facadeService.getUserPosition(action.url)
                .pipe(
                    map((position) => fromPositionActions.loadPositionSuccess({ position })),
                    catchError((error) => of(fromPositionActions.getFail(error)))
                )
            )
        )}, 
        { useEffectsErrorHandler: false }
    );
    constructor(
        private _actions$: Actions,
        private _facadeService: FacadeService,
    ){ }
}