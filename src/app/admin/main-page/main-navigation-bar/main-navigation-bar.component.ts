import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Destroyable} from "@net-boost-media/components/destroyable/destroyable";
import {FormBuilder, FormControl} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {setDirection, setLanguage} from "@net-boost-media/store/actions/locale.actions";
import {Direction, Language} from "@net-boost-media/types/locale/locale.types";
import {selectLanguage} from "@net-boost-media/store/selectors/locale.selectors";

@Component({
  selector: 'app-main-navigation-bar',
  templateUrl: './main-navigation-bar.component.html',
  styleUrls: ['./main-navigation-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainNavigationBarComponent extends Destroyable implements OnInit {
  //language
  languageFormControl!: FormControl;
  mouseHoverSearch: boolean = false;
  //expansion-panel
  panelOpenState = false;
  searchFormControl!: FormControl;
  language$ = this.store.select(selectLanguage);

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    super();
    this.initLanguageForm()
    this.initSearchForm()
  }

  // ng on init
  ngOnInit(): void {
  }

  initSearchForm() {
    this.searchFormControl = this.formBuilder.control(null);
  }

  initLanguageForm() {
    this.languageFormControl = this.formBuilder.control(null);
  }
  toggleHover(isMouseHover: boolean) {
    this.mouseHoverSearch = isMouseHover;
  }
  LanguageSetUp() {
    let value = this.languageFormControl.value;
    if (value === 'he') {
      this.store.dispatch(setLanguage({
        language: Language.Hebrew
      }));
      this.store.dispatch(setDirection({
        direction: Direction.RTL
      }));
    } else {
      this.store.dispatch(setLanguage({
        language: Language.English
      }));
      this.store.dispatch(setDirection({
        direction: Direction.LTR
      }));
    }
  }
}
