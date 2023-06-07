import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {UIState} from '../state/ui.state';
import {featureUIKey} from '../reducers/ui.reducer';
import {ScreenSize} from "@net-boost-media/types/ui/ui.types";


// store
const getGlobalLoading = (state: UIState): boolean => state.globalLoading;

const getScreenSize = (state: UIState): ScreenSize => state.screenSize;

// settings state
export const selectUIState: MemoizedSelector<object,
  UIState> = createFeatureSelector<UIState>(featureUIKey);

export const selectIsGlobalLoading: MemoizedSelector<object,
  boolean> = createSelector(
  selectUIState,
  getGlobalLoading
);

export const selectScreenSize: MemoizedSelector<object,
  ScreenSize> = createSelector(
  selectUIState,
  getScreenSize
);
