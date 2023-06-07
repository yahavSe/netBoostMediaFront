import {Inject, Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {CrawlerService} from "@net-boost-media/services/crawler/crawler.service";
import {catchError, EMPTY, Observable, of, switchMap} from "rxjs";
import {UrlList} from "@net-boost-media/types/crawler/crawler.types";
import {Resolve} from "@angular/router";
import {crawlerServiceInjectionToken} from "@net-boost-media/constants/crawler/crawler.constants";
import {setUrls} from "@net-boost-media/store/actions/crawler.actions";

@Injectable({
    providedIn: 'root'
})
export class UrlsResolver implements Resolve<UrlList> {
    constructor(
        private crawlerService: CrawlerService,
        private store: Store,
    ) {
    }

    resolve(): Observable<UrlList> {
        try {
            return this.crawlerService?.getUrls()
                .pipe(
                    switchMap(response => {
                        this.store.dispatch(setUrls({
                            urlList:response.urlList
                        }));
                        return of(response.urlList)
                    }),
                    catchError(error => {
                        return EMPTY;
                    })
                )
        } catch (e) {
            return EMPTY
        }

    }
}
