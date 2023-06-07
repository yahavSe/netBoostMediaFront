import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {UrlListState} from "@net-boost-media/store/state/crawler.state";
import {UrlList} from "@net-boost-media/types/crawler/crawler.types";
import {featureUrlsKey} from "@net-boost-media/store/reducers/crawler.reducer";

// store
const getUrls = (state: UrlListState): UrlList | undefined => state.urlList;
// settings state
export const selectUrlsState: MemoizedSelector<object,
    UrlListState> = createFeatureSelector<UrlListState>(featureUrlsKey);

// shops
export const selectUrls: MemoizedSelector<object,
    UrlList | undefined> = createSelector(
    selectUrlsState,
    getUrls
);
