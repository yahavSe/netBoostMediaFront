import {Component, Inject, OnInit} from "@angular/core";
import {selectLanguage} from "@net-boost-media/store/selectors/locale.selectors";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {refreshUrl} from "@net-boost-media/store/actions/crawler.actions";

@Component({
    selector: 'app-crawler-popup',
    templateUrl: './crawler-popup.component.html',
    styleUrls: ['./crawler-popup.component.scss']
})
export class CrawlerPopupComponent implements OnInit {
    language$ = this.store.select(selectLanguage);


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {
            url?: string;
        },
        private store: Store,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private dialogRef: MatDialogRef<CrawlerPopupComponent>,
    ) {
    }

    ngOnInit(): void {
    }

    // close
    close() {
        this.dialogRef.close();
    }

    // back
    refresh() {
        this.store.dispatch(refreshUrl({
            filtersSearch: {
                urlSearch: this.data.url,
                depth: 1
            }
        }))
        this.dialogRef.close();

    }
}
