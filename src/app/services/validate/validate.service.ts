import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
  checkByEquals(confirmedProp: string, confirmProp: string) {
    // here we have the 'passwords' group
    return function (abstractControl: AbstractControl) {
      const password = abstractControl.get(confirmedProp).value; // to get value in input tag
      const confirmPassword = abstractControl.get(confirmProp).value; // to get value in input tag
      if (password === confirmPassword) {
        abstractControl.get(confirmProp).setErrors(null);
      } else {
        abstractControl.get(confirmProp).setErrors({
          notSame: true,
          target: confirmedProp
        });
      }
      return  password === confirmPassword ? null : { notSame: true };
    };
  }
}
