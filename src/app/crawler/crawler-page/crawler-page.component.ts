import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Destroyable} from "@net-boost-media/components/destroyable/destroyable";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {fetchUrls} from "@net-boost-media/store/actions/crawler.actions";
import {selectUrls} from "@net-boost-media/store/selectors/crawler.selectors";
import {takeUntil} from "rxjs/operators";
import {Urls} from "@net-boost-media/types/crawler/crawler.types";
import {CrawlerPopupComponent} from "@net-boost-media/app/crawler/crawler-popup/crawler-popup.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'app-crawler-page',
    templateUrl: './crawler-page.component.html',
    styleUrls: ['./crawler-page.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CrawlerPageComponent extends Destroyable implements OnInit {

    urlList: Urls[] = [];

    openDialog: boolean = false;

    searchFormGroup: FormGroup;
    urlFormControl: FormControl;
    depthFormControl: FormControl;

    constructor(
        private formBuilder: FormBuilder,
        private store: Store,
        private dialog: MatDialog,
    ) {
        super();
        this.initContactMeForm();
    }

    ngOnInit(): void {

    }

    initContactMeForm() {
        this.urlFormControl = this.formBuilder.control(null, [
            Validators.required,
            // urlValidator(['com', 'co.il', 'org']),
        ]);
        this.depthFormControl = this.formBuilder.control(1, [
            Validators.required,
            Validators.pattern("^[1-9]*$"),
        ]);

        this.searchFormGroup = this.formBuilder?.group({
            url: this.urlFormControl,
            depth: this.depthFormControl,
        });
    }

    search() {
        if (!this.searchFormGroup.invalid) {
            let url = this.urlFormControl.value;
            let depth = this.depthFormControl.value;

            // Check if the URL starts with "www" or "http"
            if (!url.startsWith('www.') && !url.startsWith('http')) {
                // Add "www" and "http" to the URL
                url = 'www.' + url;
                url = 'http://' + url;
            } else if (url.startsWith('www.') && !url.startsWith('http')) {
                // Add "http" to the URL
                url = 'http://' + url;
            }

            this.store.dispatch(fetchUrls({
                filtersSearch: {
                    urlSearch: url,
                    depth: depth
                },
                onSuccess: (response) => {
                    if (response.urlList.existingUrl) {
                        const dialogRef = this.dialog.open(CrawlerPopupComponent, {
                            data: {
                                url:url,
                                depth: depth
                            }
                        });
                        dialogRef.afterClosed().subscribe(value => {
                            this.openDialog = false;
                        })
                    }
                }
            }));
        }
    }

}
