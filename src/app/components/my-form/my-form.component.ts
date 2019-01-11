import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidatorFn, Validators} from '@angular/forms';
import {SkillEnum} from '../../enums/skill-enum.enum';
import {User} from '../../classes/user';
import {ConfigForm} from '../../classes/config-form';
import {ValidateService} from '../../services/validate/validate.service';
import {UserInterface} from '../../interfaces/user';

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyFormComponent),
  multi: true
};

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
  providers: [customValueProvider]
})
export class MyFormComponent implements  ControlValueAccessor {

  constructor(private formBuilder: FormBuilder,
              private validateService: ValidateService) {
  }
  private _config: ConfigForm[];
  @Input() userObject: UserInterface;
  @Input()
  get config(): ConfigForm[] {
    return this._config;
  }
  set config(value: ConfigForm[]) {
    this._config = value;
    this.myForm = this.formBuilder.group({});
    for (const item of this._config) {
      this.myForm.addControl(item.name, this.formBuilder.control('', Validators.compose(<ValidatorFn[]>item.validators)));
      if (item.type === 'confirm') {
        this.myForm.setValidators(this.validateService.checkByEquals(item.confirmableProp, item.name));
      }
    }
    this.myForm.valueChanges.subscribe(resObject => {
      this.outputOnChange.emit(resObject);
      this.propagateChange(resObject);
    });
  }
  @Output('onChange') outputOnChange: EventEmitter<any> = new EventEmitter();
  myForm: FormGroup;
  propagateChange: any = () => {};
  propagateTouched: any = () => {};
  writeValue(_user: UserInterface): void {
    if ( _user ) {
      this.userObject = _user;
    }
  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.propagateTouched = fn;
  }
}
