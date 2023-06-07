import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
    UrlList
} from "@net-boost-media/types/crawler/crawler.types";
import {
    crawlerBaseApiUrl, crawlerMoreBaseApiUrl, crawlerRefreshApiUrl,
} from "@net-boost-media/constants/crawler/crawler.constants";
import {
  FiltersSearch,
} from "@net-boost-media/types/crawler/crawler-search.types";

@Injectable({providedIn: 'root'})
export class CrawlerService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  // get urls
    refreshUrl(filtersSearch?: FiltersSearch):
    Observable<{
      urlList: UrlList,
    }> {
    return this.httpClient.post<{
        urlList: UrlList,
    }>(crawlerRefreshApiUrl,
      {
        filtersSearch: filtersSearch,
      }
    )
  }

    getUrls(filtersSearch?: FiltersSearch):
        Observable<{
            urlList: UrlList,
        }> {
        return this.httpClient.post<{
            urlList: UrlList,
        }>(crawlerBaseApiUrl,
            {
                filtersSearch: filtersSearch,
            }
        )
    }

  // get more crawler
  getMoreUrls(paginationIndex?: number):
    Observable<{
        urlList: UrlList,
    }> {
    return this.httpClient.post<{
        urlList: UrlList,
    }>(crawlerMoreBaseApiUrl,
      {
        paginationIndex
      }
    )
  }
}
