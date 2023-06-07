import {NgModule} from '@angular/core';
import {AppSharedModule} from "@net-boost-media/shared/shared.module";
import {AdminRoutingModule} from "@net-boost-media/admin/admin-routing.module";
import {MainNavigationBarComponent} from "@net-boost-media/admin/main-page/main-navigation-bar/main-navigation-bar.component";
import {MainToolbarComponent} from "@net-boost-media/admin/main-page/main-toolbar/main-toolbar.component";
import {MainPageComponent} from "@net-boost-media/admin/main-page/main-page/main-page.component";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MainPageComponent,
    MainToolbarComponent,
    MainNavigationBarComponent,
  ],
  imports: [
    AdminRoutingModule,
    AppSharedModule,
    MatTableModule,
    CommonModule,
  ],
  exports: [],
  providers: []
})
export class AdminModule {
}
