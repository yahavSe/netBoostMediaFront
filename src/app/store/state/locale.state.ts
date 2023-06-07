import {Injectable} from '@angular/core';
import {Direction, Language} from '@net-boost-media/types/locale/locale.types';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  getHtmlLangDir(): { lang: Language, dir: Direction } {
    const htmlElem = document.getElementsByTagName('html')[0];
    const lang: Language = htmlElem.getAttribute('lang') === 'en' ? Language.English : Language.Hebrew;
    const dir: Direction = htmlElem.getAttribute('dir') === 'ltr' ? Direction.LTR : Direction.RTL;
    return {lang, dir};
  }
}

export interface LocaleState {
  language: Language;
  direction: Direction;
}

export const initialLocaleState: LocaleState = {
  language: new HtmlService().getHtmlLangDir().lang,
  direction: new HtmlService().getHtmlLangDir().dir
};
