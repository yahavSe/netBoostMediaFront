import {Action, createReducer, on} from '@ngrx/store';
import {initialUIState, UIState} from '../state/ui.state';
import {setGlobalLoading, setScreenSize, showToast} from '../actions/ui.actions';

export const featureUIKey = 'ui';

const _uiReducer = createReducer<UIState, Action>(
  initialUIState,
  on(
    showToast, (state => state)),
  on(setGlobalLoading, (state, {loading}) => ({...state, globalLoading: loading})),
  on(setScreenSize, (state, {screenSize}) => ({...state, screenSize})),
);


export function uiReducer(state: UIState | undefined, action: Action) {
  return _uiReducer(state, action);
}
