import {UrlList} from "@net-boost-media/types/crawler/crawler.types";

export interface UrlListState {
  loading: boolean;
  urlList?: UrlList;
}

export const initialUrlsState: UrlListState = {
  loading: false,
  urlList: {
    data: [],
    page: undefined,
    perPage: undefined,
    total: undefined,
    existingUrl:undefined,
  }
};

