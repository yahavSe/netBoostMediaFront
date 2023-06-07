import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {
  get element(): HTMLElement {
    return document.documentElement;
  }
}
