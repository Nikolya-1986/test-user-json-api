import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";

import { FacadeService } from "../../services/facades/facade.service";
import * as fromEpisodeActions from "./episode.actons";

@Injectable()
export class EpisodeEffects {

    loadEpisodes$: Observable<Action> = createEffect(() => {
        return this._actions$.pipe(
            ofType(fromEpisodeActions.EpisodeActionsType.LOAD_EPISODES_REQUEST),
            switchMap(() => this._facadeService.getСhangedEpisodes()
                .pipe(
                    map(episodes => fromEpisodeActions.loadEpisodesSuccess({ episodes })),
                    catchError((error) => of(fromEpisodeActions.getFail(error)))
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