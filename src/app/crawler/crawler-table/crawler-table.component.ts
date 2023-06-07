import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Urls} from '@net-boost-media/types/crawler/crawler.types';
import {Store} from "@ngrx/store";
import {selectUrls} from "@net-boost-media/store/selectors/crawler.selectors";
import {take} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Destroyable} from "@net-boost-media/utils/destroyable/destroyable";

@Component({
    selector: 'crawler-table',
    templateUrl: './crawler-table.component.html',
    styleUrls: ['./crawler-table.component.scss'],
})
export class CrawlerTableComponent extends Destroyable implements OnInit {

    urlsColumns: string[] = ['URL', 'Time', 'Parent'];
    urls$ = this.store.select(selectUrls);
    urls: Urls[] = [];

    constructor(
        private store: Store
    ) {
        super();
    }

    ngOnInit(): void {
        this.urls$.pipe(takeUntil(this.destroy$)).subscribe(urls => {
            if (urls?.data) {
                this.urls = urls?.data;
                // this.urls = urls?.data?.map(url => {
                //     // return this.setExpandedProperty({...url});
                // });
            }
        });
    }
    //
    // setExpandedProperty(url: Urls): Urls {
    //     if (url.children && url.children.length > 0) {
    //         url = {...url, expanded: true};
    //         if (url.children) {
    //             url.children = url.children.map(childUrl => this.setExpandedProperty({...childUrl}));
    //         }
    //     } else {
    //         url = {...url, expanded: null};
    //     }
    //     return url;
    // }
    //
    // expendRow(parent: Urls) {
    //     if (parent.children && parent.children.length > 0) {
    //         if (parent.expanded) {
    //             const expandedChildren = this.getExpandedChildren(parent.children);
    //             this.urls = [...this.urls, ...expandedChildren];
    //             parent.expanded = false;
    //         } else {
    //             const removedUrls = this.getRemovedUrls(parent.children);
    //             this.urls = this.urls.filter(url => {
    //                 if (url.url) {
    //                     return !removedUrls.includes(url.url);
    //                 }
    //                 return true; // Keep the element if it doesn't have a URL.
    //             });
    //             parent.expanded = true;
    //         }
    //     }
    // }
    //
    //
    //
    // getExpandedChildren(children: Urls[]): Urls[] {
    //     let expandedChildren: Urls[] = [];
    //     for (const child of children) {
    //         expandedChildren.push(child);
    //         if (child.expanded && child.children && child.children.length > 0) {
    //             expandedChildren = [...expandedChildren, ...this.getExpandedChildren(child.children)];
    //         }
    //     }
    //     return expandedChildren;
    // }
    //
    // getRemovedUrls(children: Urls[]): string[] {
    //     let removedUrls: string[] = [];
    //     for (const child of children) {
    //         if (child.url) {
    //             removedUrls.push(child.url);
    //             if (child.expanded && child.children && child.children.length > 0) {
    //                 removedUrls = [...removedUrls, ...this.getRemovedUrls(child.children)];
    //             }
    //         }
    //
    //     }
    //     return removedUrls;
    // }


}
