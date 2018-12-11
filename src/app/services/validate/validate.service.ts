import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  checkByEquals(confirmedProp: string, confirmProp: string) {
    // here we have the 'passwords' group
    return function (AC: AbstractControl) {
      const password = AC.get(confirmedProp).value; // to get value in input tag
      const confirmPassword = AC.get(confirmProp).value; // to get value in input tag
      if (password === confirmPassword) {
        AC.get(confirmProp).setErrors(null);
      } else {
        AC.get(confirmProp).setErrors({
          notSame: true,
          target: confirmedProp
        });
      }
      return  password === confirmPassword ? null : { notSame: true };
    };
  }
}
