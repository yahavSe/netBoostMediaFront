import {createAction, props} from '@ngrx/store';
import {Direction, Language} from "@net-boost-media/types/locale/locale.types";

export const setLanguage = createAction(
  '[Locale] Set language',
  props<{language: Language}>()
);

export const setDirection = createAction(
  '[Locale] Set direction',
  props<{direction: Direction}>()
);
