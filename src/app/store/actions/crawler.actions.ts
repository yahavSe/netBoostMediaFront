import {createAction, props} from '@ngrx/store';
import {ErrorCallback, SuccessCallback} from "@net-boost-media/types/general/functions";
import {FiltersSearch} from "@net-boost-media/types/crawler/crawler-search.types";
import {UrlList} from "@net-boost-media/types/crawler/crawler.types";

// fetch Urls
export const fetchUrls = createAction(
  '[Crawler] Fetch Urls',
  props<{ filtersSearch: FiltersSearch, onError?: ErrorCallback, onSuccess?: SuccessCallback }>()
)
export const refreshUrl = createAction(
  '[Crawler] Refresh Urls',
  props<{ filtersSearch: FiltersSearch, onError?: ErrorCallback, onSuccess?: SuccessCallback }>()
)

// on load more Urls
export const fetchUrlsAfter = createAction(
  '[Crawler] Fetch more Shops by searchQuery',
  props<{ paginationIndex?: number, onError?: ErrorCallback, onSuccess?: SuccessCallback }>()
)

// set Urls
export const setUrls = createAction(
  '[Crawler] Set Urls',
  props<{ urlList?: UrlList, onError?: ErrorCallback, onSuccess?: SuccessCallback }>()
);

