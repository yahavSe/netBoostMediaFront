import {InjectionToken} from "@angular/core";
import {baseApiUrl} from "@net-boost-media/constants/general/general.constants";

export const crawlerBaseApiUrl = `${baseApiUrl}/crawl`;
export const crawlerMoreBaseApiUrl = `${crawlerBaseApiUrl}/next`;
export const crawlerRefreshApiUrl = `${crawlerBaseApiUrl}/refresh`;
export const crawlerServiceInjectionToken = new InjectionToken('crawler.service');
export const crawlerLocalStorageKey = 'crawler';

