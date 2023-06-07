import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppMaterialModule} from "@net-boost-media/material/material.module";
import {AppTranslationModule} from "@net-boost-media/translation/translation.module";
import {SizeDetectorComponent} from "@net-boost-media/components/size-detector/size-detector.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastrModule} from "ngx-toastr";
import {Loader} from "@net-boost-media/components/loader/loader.component";
import {OverlayModule} from "@angular/cdk/overlay";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {SafePipe} from "@net-boost-media/shared/pipes/safe.pipe";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {PopoverDirective} from "@net-boost-media/shared/directives/popover/popover.directive";
import {PopoverService} from "@net-boost-media/shared/directives/popover/popover.service";

@NgModule({
    declarations: [
        SizeDetectorComponent,
        Loader,
        SafePipe,
        PopoverDirective
    ],
    imports: [
        // modules
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        AppMaterialModule,
        AppTranslationModule,
        OverlayModule,
        NgxDatatableModule,
        MatProgressBarModule,
    ],
    exports: [
        // modules
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        ToastrModule,
        AppMaterialModule,
        AppTranslationModule,
        NgxDatatableModule,
        // components
        SizeDetectorComponent,
        Loader,
        // pipes
        SafePipe,
        PopoverDirective
    ],
    providers: [PopoverService],
})
export class AppSharedModule {
    constructor() {
    }
}
