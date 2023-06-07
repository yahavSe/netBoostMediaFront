import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {TranslocoService} from "@ngneat/transloco";
import {ApiError} from "@net-boost-media/types/network/network";

@Injectable({providedIn: 'root'})

export class ErrorService {

  constructor(
    private store: Store,
    private translocoService: TranslocoService
  ) {
  }

  getErrorMessage(error: any): string | undefined {
    if (!!error?.error?.message) {
      return this.translocoService.translate(error?.error?.message);
    } else if (!!error?.message) {
      return this.translocoService.translate(error?.message);
    } else if (error instanceof HttpErrorResponse) {
      return this.getHttpErrorResponse(error);
    } else if (typeof error === 'string') {
      return this.translocoService.translate(error);
    } else {
      return undefined;
    }
  }

  getHttpErrorResponse(httpErrorResponse: HttpErrorResponse) {
    return this.getApiErrorMessageByErrorCode((httpErrorResponse?.error as ApiError)?.code)
      || (httpErrorResponse?.error as ApiError)?.message
      || this.getHttpErrorMessageByStatusCode(httpErrorResponse?.status);
  }

  getApiErrorMessageByErrorCode(errorCode: number) {
    try {
      return this.translocoService.translate(`apiErrors.${errorCode}`, {})
    } catch (e) {
      return undefined;
    }
  }

  getHttpErrorMessageByStatusCode(statusCode: number) {
    try {
      return this.translocoService.translate(`httpErrors.${statusCode}`, {})
    } catch (e) {
      return undefined;
    }
  }


}
