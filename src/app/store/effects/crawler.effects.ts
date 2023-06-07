import {Inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, switchMap} from "rxjs";
import {StorageService} from "@net-boost-media/services/storage/storage.service";
import {ErrorService} from "@net-boost-media/services/error/error.service";
import {setGlobalLoading, showToast} from "@net-boost-media/store/actions/ui.actions";
import {ToastType} from "@net-boost-media/types/ui/ui.types";
import {CrawlerService} from "@net-boost-media/services/crawler/crawler.service";
import {crawlerServiceInjectionToken} from "@net-boost-media/constants/crawler/crawler.constants";
import {fetchUrls, refreshUrl, setUrls} from "@net-boost-media/store/actions/crawler.actions";


@Injectable()
export class CrawlerEffects {
    // fetch Funds
    fetchUrls$ = createEffect(
        () => this.actions$.pipe(
            ofType(fetchUrls),
            switchMap((action) => {
                    // set Funds loading
                    this.store.dispatch(setGlobalLoading({loading: true}));
                    return this.crawlerService.getUrls(action?.filtersSearch)
                        .pipe(
                            switchMap(response => {
                                // on success callback
                                if (!!action?.onSuccess) action?.onSuccess(response);
                                // on success
                                return [
                                    setUrls({
                                        urlList: response.urlList,
                                    }),
                                    setGlobalLoading({loading: false}),
                                ]
                            }),
                            catchError(errorRes => {
                                // get error
                                const error = this.errorService.getErrorMessage(errorRes);

                                // on error callback
                                if (!!action?.onError) action?.onError?.call(error);

                                // on error
                                return [
                                    setGlobalLoading({loading: false}),
                                    showToast({content: error, status: ToastType.failure})
                                ];
                            })
                        );
                }
            )
        )
    );
    refreshUrls$ = createEffect(
        () => this.actions$.pipe(
            ofType(refreshUrl),
            switchMap((action) => {
                    // set Funds loading
                    this.store.dispatch(setGlobalLoading({loading: true}));
                    return this.crawlerService.refreshUrl(action?.filtersSearch)
                        .pipe(
                            switchMap(response => {
                                // on success callback
                                if (!!action?.onSuccess) action?.onSuccess(response);
                                // on success
                                return [
                                    setUrls({
                                        urlList: response.urlList,
                                    }),
                                    setGlobalLoading({loading: false}),
                                ]
                            }),
                            catchError(errorRes => {
                                // get error
                                const error = this.errorService.getErrorMessage(errorRes);

                                // on error callback
                                if (!!action?.onError) action?.onError?.call(error);

                                // on error
                                return [
                                    setGlobalLoading({loading: false}),
                                    showToast({content: error, status: ToastType.failure})
                                ];
                            })
                        );
                }
            )
        )
    );

    // TODO: FETCH MORE
    // fetchMoreUrls$ = createEffect(
    //   () => this.actions$.pipe(
    //     ofType(fetchUrlsAfter),
    //     withLatestFrom(),
    //     switchMap((action) => {
    //         // set Funds loading
    //         this.store.dispatch(setGlobalLoading({loading: true}));
    //         return this.crawlerService.getMoreUrls(action?.paginationIndex)
    //           .pipe(
    //             switchMap(response => {
    //               // on success callback
    //               if (!!action?.onSuccess) action?.onSuccess(response?.urlList);
    //                 return [
    //                     setUrls({
    //                         urlsList: response.urlList,
    //                     }),
    //                     setGlobalLoading({loading: false}),
    //                 ]
    //             }),
    //             catchError(errorRes => {
    //               // get error
    //               const error = this.errorService.getErrorMessage(errorRes);
    //
    //               // on error callback
    //               if (!!action?.onError) action?.onError?.call(error);
    //
    //               // on error
    //               return [
    //                   setGlobalLoading({loading: false}),
    //                 showToast({content: error, status: ToastType.failure})
    //               ];
    //             })
    //           );
    //       }
    //     )
    //   )
    // );

    constructor(
        private actions$: Actions,
        private store: Store,
        private storageService: StorageService,
        private errorService: ErrorService,
        private crawlerService: CrawlerService,
    ) {
    }

}
