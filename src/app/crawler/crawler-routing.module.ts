import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CrawlerPageComponent} from "@net-boost-media/app/crawler/crawler-page/crawler-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crawler-search',
    pathMatch: 'full'
  },
  {
    path: 'crawler-search',
    component: CrawlerPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrawlerRoutingModule {
}
