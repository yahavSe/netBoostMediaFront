import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function
export function urlValidator(validTlds: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const url = control.value;
    const regex = new RegExp(`\\.(${validTlds.join('|')})$`, 'i');

    if (!regex.test(url)) {
      return { invalidUrl: true };
    }
    return null;
  };
}


