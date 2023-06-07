import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {setDirection, setLanguage} from "@net-boost-media/store/actions/locale.actions";
import {tap} from "rxjs";
import {Direction, Language} from "@net-boost-media/types/locale/locale.types";
import {TranslocoService} from "@ngneat/transloco";
import {StorageService} from "@net-boost-media/services/storage/storage.service";

@Injectable()
export class LocaleEffects {

  // language
  setLanguage$ = createEffect(
    () => this.actions$.pipe(
      ofType(setLanguage),
      tap(action => {
        this.storageService.setItem('language', action?.language);
        this.translocoService.setActiveLang(action?.language);
        if (action?.language === Language.Hebrew) {
          this.store.dispatch(setDirection({
            direction: Direction.RTL
          }));
        } else {
          this.store.dispatch(setDirection({
            direction: Direction.LTR
          }));
        }
        const html = document.querySelector('html');
        if (!!html) {
          html.lang = action?.language;
        }
      })
    ),
    {dispatch: false}
  );

  // language
  setDirection$ = createEffect(
    () => this.actions$.pipe(
      ofType(setDirection),
      tap(action => {
        this.storageService.setItem('direction', action?.direction);
        const html = document.querySelector('html');
        if (!!html) {
          html.dir = action?.direction;
        }
      })
    ),
    {dispatch: false}
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    private storageService: StorageService,
    private translocoService: TranslocoService
  ) {
  }

}
