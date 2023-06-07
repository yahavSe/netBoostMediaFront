import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class StorageService {
  

  setItem(key: string, value: any) {
    try {
      if (!!key) {
        if (!!value) {
          localStorage.setItem(key, JSON.stringify(value));
        } else {
          localStorage.removeItem(key);
        }
      }
    } catch (e) {
      console.error('Cannot stringify value for storage');
    }
  }

  getItem<T>(key: string): T | undefined {
    if (!!key && !!localStorage?.getItem(key)) {
      return JSON?.parse(<string>localStorage?.getItem(key));
    }
    return undefined;
  }

  clearStorage() {
    localStorage.clear();
  }

}
