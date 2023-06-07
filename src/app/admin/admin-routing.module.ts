import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "@net-boost-media/admin/main-page/main-page/main-page.component";
import {UrlsResolver} from "@net-boost-media/shared/resolvers/admin/urls.resolver";
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'crawler',
        pathMatch: 'full'
      },
      {
        path: 'crawler',
        resolve:{urls: UrlsResolver},
        loadChildren: () => import('@net-boost-media/app/crawler/crawler.module').then(m => m.CrawlerModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
