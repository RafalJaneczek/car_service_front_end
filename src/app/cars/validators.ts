import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function onlyDigitsValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const digitsValid = /^[0-9]*$/.test(value);

    return !digitsValid ? {onlyDigits: true} : null;
  }
}
