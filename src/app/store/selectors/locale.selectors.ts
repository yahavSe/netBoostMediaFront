import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {LocaleState} from "@net-boost-media/store/state/locale.state";
import {Direction, Language} from "@net-boost-media/types/locale/locale.types";
import {featureLocaleKey} from "@net-boost-media/store/reducers/locale.reducer";

// store
const getLanguage = (state: LocaleState): Language => state.language;

const getDirection = (state: LocaleState): Direction => state.direction;

// settings state
export const selectLocaleState: MemoizedSelector<object,
  LocaleState> = createFeatureSelector<LocaleState>(featureLocaleKey);

export const selectLanguage: MemoizedSelector<object,
  Language> = createSelector(
  selectLocaleState,
  getLanguage
);

export const selectDirection: MemoizedSelector<object,
  Direction> = createSelector(
  selectLocaleState,
  getDirection
);
