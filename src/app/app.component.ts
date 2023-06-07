import {Component, OnInit} from '@angular/core';
import {Destroyable} from "./shared/components/destroyable/destroyable";
import {Store} from "@ngrx/store";
import {Observable, take} from "rxjs";
import {setDirection, setLanguage} from "@net-boost-media/store/actions/locale.actions";
import {ScreenSize} from "@net-boost-media/types/ui/ui.types";
import {setScreenSize} from "@net-boost-media/store/actions/ui.actions";
import {selectIsGlobalLoading, selectScreenSize} from "@net-boost-media/store/selectors/ui.selectors";
import {StorageService} from "@net-boost-media/services/storage/storage.service";
import {
  defaultDirection,
  defaultLanguage,
  directionLocalStorageKey,
  languageLocalStorageKey
} from "@net-boost-media/constants/locale/locale.constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent extends Destroyable implements OnInit {

  // global loading
  globalLoading$: Observable<boolean> = this.store.select(selectIsGlobalLoading);

  constructor(
    private store: Store,
    private storageService: StorageService
  ) {
    super();

    // language
    this.initLanguage();

    // direction
    this.initDirection();

  }

  ngOnInit(): void {
  }

  initLanguage() {
    this.store.dispatch(setLanguage({
      language: this.storageService.getItem(languageLocalStorageKey) ?? defaultLanguage
    }));
  }

  initDirection() {
    this.store.dispatch(setDirection({
      direction: this.storageService.getItem(directionLocalStorageKey) ?? defaultDirection
    }));
  }

  onScreenSizedChanged(screenSize: ScreenSize) {
    this.store.select(selectScreenSize)
      .pipe(take(1))
      .subscribe(currentScreenSize => {
        if (currentScreenSize !== screenSize) {
          this.store.dispatch(setScreenSize({
            screenSize
          }));
        }
      })
  }

}
