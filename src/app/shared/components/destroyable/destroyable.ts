import { Subject } from 'rxjs';
import { Component, OnDestroy } from '@angular/core';

@Component({
  template: ''
})
export abstract class Destroyable implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
