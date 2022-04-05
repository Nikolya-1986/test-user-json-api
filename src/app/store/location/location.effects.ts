import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";

import { FacadeService } from "../../services/facades/facade.service";
import * as fromLocationActions from "./location.actions";

@Injectable()
export class EpisodeEffects {

    loadEpisodes$: Observable<Action> = createEffect(() => {
        return this._actions$.pipe(
            ofType(fromLocationActions.LocationActionsType.LOAD_LOCATION_REQUEST),
            switchMap((action: any) => this._facadeService.getUserLocation(action.id)
                .pipe(
                    map((_location: Location) => fromLocationActions.loadLocationSuccess({ location: action._location })),
                    catchError((error) => of(fromLocationActions.getFail(error)))
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