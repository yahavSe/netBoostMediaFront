import {Action, createReducer, on} from '@ngrx/store';
import {setDirection, setLanguage} from '../actions/locale.actions';
import {initialLocaleState, LocaleState} from "../state/locale.state";

export const featureLocaleKey = 'locale';

const _localeReducer = createReducer<LocaleState, Action>(
  initialLocaleState,
  on(setLanguage, (state, {language}) => ({...state, language})),
  on(setDirection, (state, {direction}) => ({...state, direction})),
);


export function localeReducer(state: LocaleState | undefined, action: Action) {
  return _localeReducer(state, action);
}
