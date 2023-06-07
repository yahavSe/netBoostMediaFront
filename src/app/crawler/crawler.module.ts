import {NgModule} from '@angular/core';
import {AppSharedModule} from "@net-boost-media/shared/shared.module";
import {CrawlerRoutingModule} from "@net-boost-media/app/crawler/crawler-routing.module";
import {CrawlerPageComponent} from "@net-boost-media/app/crawler/crawler-page/crawler-page.component";
import {CrawlerTableComponent} from "@net-boost-media/app/crawler/crawler-table/crawler-table.component";
import {CrawlerPopupComponent} from "@net-boost-media/app/crawler/crawler-popup/crawler-popup.component";
import {CdkColumnDef} from "@angular/cdk/table";

@NgModule({
  declarations: [
    CrawlerPageComponent,
    CrawlerTableComponent,
    CrawlerPopupComponent
  ],
  imports: [
    CrawlerRoutingModule,
    AppSharedModule,
  ],
  exports: [],
  providers: [CdkColumnDef],
})
export class CrawlerModule {
}
