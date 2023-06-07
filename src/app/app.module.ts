import {NgModule} from '@angular/core';
import {AppStoreModule} from "@net-boost-media/store/store.module";
import {AppComponent} from "@net-boost-media/app/app.component";
import {AppRoutingModule} from "@net-boost-media/app/app-routing.module";
import {AppSharedModule} from "@net-boost-media/shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {HtmlService} from "@net-boost-media/app/htmlService.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppSharedModule,
    AppStoreModule,
    HttpClientModule,
  ],
  exports:[],
  bootstrap: [AppComponent],
  providers: [HtmlService]
})
export class AppModule {
}
