import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {showToast} from "@net-boost-media/store/actions/ui.actions";
import {tap} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {ToastType} from "@net-boost-media/types/ui/ui.types";

@Injectable()
export class UIEffects {

  
  showToast$ = createEffect(
    () => this.actions$.pipe(
      ofType(showToast),
      tap(action => {
        switch (action.status) {
          case ToastType.success:
            this.toastrService.success(action.content, action.title, {
              toastClass: 'ngx-toastr toast-success'
            });
            break;
          case ToastType.failure:
            this.toastrService.error(action.content, action.title, {
              toastClass: 'ngx-toastr toast-error'
            });
            break;
          case ToastType.warning:
            this.toastrService.warning(action.content, action.title, {
              toastClass: 'ngx-toastr toast-warning'
            });
            break;
        }
      })
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private toastrService: ToastrService
  ) {
  }

}
