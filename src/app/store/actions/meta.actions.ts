import {createAction, props} from '@ngrx/store';

export const CLEAR_STATE = '[App] Clear state';
export const clearState = createAction(
  CLEAR_STATE,
  props<any>()
);
