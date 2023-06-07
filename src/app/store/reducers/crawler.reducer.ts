import {Action, createReducer, on} from '@ngrx/store';
import {initialUrlsState, UrlListState} from "@net-boost-media/store/state/crawler.state";
import {fetchUrls, fetchUrlsAfter, setUrls} from "@net-boost-media/store/actions/crawler.actions";

export const featureUrlsKey = 'crawler';

const _urlsReducer = createReducer<UrlListState, Action>(
  initialUrlsState,
  on(
    fetchUrls,
    fetchUrlsAfter,
    (state) => state),
  on(setUrls, (state, {urlList}) => ({
    ...state,
      urlList,
  })),
)

export function urlsReducer(state: UrlListState | undefined, action: Action) {
  return _urlsReducer(state, action);
}

