import {Component, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {Destroyable} from "@net-boost-media/components/destroyable/destroyable";
import {Store} from "@ngrx/store";
import {setLanguage} from "@net-boost-media/store/actions/locale.actions";
import {Language} from "@net-boost-media/types/locale/locale.types";
import {selectLanguage} from "@net-boost-media/store/selectors/locale.selectors";
import {PopoverDirective} from "@net-boost-media/shared/directives/popover/popover.directive";

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainToolbarComponent extends Destroyable implements OnInit {
  // language popover button
  @ViewChild("languagesPopoverButton") languagesPopoverButton: PopoverDirective;
  // types
  languageEnum = Language;
  //language
  language$ = this.store.select(selectLanguage);
  // search form
  constructor(
      private store: Store,
  ) {
    super();
  }

  // ng on init
  ngOnInit(): void {
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
