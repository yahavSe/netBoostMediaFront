import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {Destroyable} from "@net-boost-media/components/destroyable/destroyable";
import {FormControl, FormGroup, UntypedFormBuilder} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {setLanguage} from "@net-boost-media/store/actions/locale.actions";
import {Language} from "@net-boost-media/types/locale/locale.types";
import {selectLanguage} from "@net-boost-media/store/selectors/locale.selectors";
import {PopoverDirective} from "@net-boost-media/shared/directives/popover/popover.directive";
import {takeUntil} from "rxjs";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainToolbarComponent extends Destroyable implements OnInit {
  // language popover button
  @ViewChild("languagesPopoverButton") languagesPopoverButton: PopoverDirective;
  @ViewChild("hamburgerMenuButton") hamburgerMenuButton: PopoverDirective;
  @ViewChild("notificationsPopoverButton") notificationsPopoverButton: PopoverDirective;
  @ViewChild("searchBarPopover") searchBarPopover: PopoverDirective;
  // types
  languageEnum = Language;
  //language
  language$ = this.store.select(selectLanguage);
  // search form
  searchForm: FormGroup;
  // shop types
  shopTypesFormControl: FormControl;
  // categories
  categoriesFormControl: FormControl;
  // locations
  locationFormControl: FormControl;
  // search query
  searchQueryFormControl: FormControl;
  mediaQuery = window.matchMedia("(max-width: 870px)");
  constructor(
      private store: Store,
      private formBuilder: UntypedFormBuilder,
      private router: Router,
      private dialog: MatDialog,
  ) {
    super();
    // init search form
    this.initSearchForm();
  }

  // ng on init
  ngOnInit(): void {
  }

  initSearchForm() {
    // shop type
    this.shopTypesFormControl = this.formBuilder.control(null);

    // area of interest
    this.categoriesFormControl = this.formBuilder.control(null);

    // location
    this.locationFormControl = this.formBuilder.control(null);

    // search query form control
    this.searchQueryFormControl = this.formBuilder.control(null);

    // init search form
    this.searchForm = this.formBuilder.group({
      shopType: this.shopTypesFormControl,
      categories: this.categoriesFormControl,
      location: this.locationFormControl,
      textSearch: this.searchQueryFormControl
    });
  }

  setGlobalLanguage(language: Language) {
    // close language popover
    this.languagesPopoverButton?.close();
    // set language
    if (language === Language.Hebrew) {
      this.store.dispatch(setLanguage({
        language: Language.Hebrew
      }));
    } else {
      this.store.dispatch(setLanguage({
        language: Language.English
      }));
    }
  }
}
