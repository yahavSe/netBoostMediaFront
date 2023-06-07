import {Action, ActionReducer, MetaReducer} from '@ngrx/store';
import {CLEAR_STATE} from '../actions/meta.actions';
import {environment} from "../../../environments/environment";


export function clearStateMetaReducer<State extends {}>(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State | undefined, action: Action) {
    if (action.type === CLEAR_STATE) {
      // @ts-ignore
      const isMobile = state?.ui?.isMobile;
      state = {} as State; // ==> Emptying state here
      // @ts-ignore
      state.ui = {isMobile};
    }
    return reducer(state, action);
  };
}

export function stateLoggerMetaReducer<State extends {}>(reducer: ActionReducer<State>): ActionReducer<State> {
  return function stateLogger(state: State | undefined, action: Action) {
    const result = reducer(state, action);
    return result;
  };
}

export const metaReducers: MetaReducer<any>[] = !!environment?.production ? [clearStateMetaReducer] : [stateLoggerMetaReducer, clearStateMetaReducer];
