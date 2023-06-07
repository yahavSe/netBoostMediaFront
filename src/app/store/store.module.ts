import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {UIEffects} from "./effects/ui.effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {featureUIKey, uiReducer} from "./reducers/ui.reducer";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {metaReducers} from "./reducers/meta.reducer";
import {featureLocaleKey, localeReducer} from "./reducers/locale.reducer";
import {LocaleEffects} from "@net-boost-media/store/effects/locale.effects";
import {featureUrlsKey, urlsReducer} from "@net-boost-media/store/reducers/crawler.reducer";
import {CrawlerEffects} from "@net-boost-media/store/effects/crawler.effects";
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {
        [featureUIKey]: uiReducer,
        [featureLocaleKey]: localeReducer,
        [featureUrlsKey]: urlsReducer,
      },
      {metaReducers}
    ),
    EffectsModule.forRoot([
      UIEffects,
      LocaleEffects,
      CrawlerEffects
    ]),
    StoreDevtoolsModule.instrument(),
    StoreRouterConnectingModule.forRoot(),
  ],
})
export class AppStoreModule {
}
