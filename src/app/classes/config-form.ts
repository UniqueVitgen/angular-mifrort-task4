import {Validators} from '@angular/forms';

export class ConfigForm {
  type: any;
  name: string;
  validators: Validators[];
  options?: string[];
  confirmableProp?: string;
  confirmatorProp?: string;
}
