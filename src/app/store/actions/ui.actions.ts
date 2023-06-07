import {createAction, props} from '@ngrx/store';
import {ScreenSize, ToastType} from "@net-boost-media/types/ui/ui.types";

// global loading
export const setGlobalLoading = createAction(
  '[UI] Set global loading',
  props<{ loading: boolean }>()
);

// screen size
export const setScreenSize = createAction(
  '[UI] Set screen size',
  props<{ screenSize: ScreenSize }>()
);

// toast
export const showToast = createAction(
  '[UI] Show toast',
  props<{ title?: string, content?: string, status?: ToastType }>()
)
