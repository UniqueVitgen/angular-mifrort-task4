import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, ValidatorFn, Validators} from '@angular/forms';
import {SkillEnum} from '../../enums/skill-enum.enum';
import {User} from '../../classes/user';
import {ConfigForm} from '../../classes/config-form';
import {ValidateService} from '../../services/validate/validate.service';

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
export class MyFormComponent implements  OnChanges,  ControlValueAccessor {

  constructor(private formBuilder: FormBuilder,
              private validateService: ValidateService) {
  }
  @Input() userObject: object;
  @Input() config: ConfigForm[];
  @Output('onChange') outputOnChange: EventEmitter<any> = new EventEmitter();
  myForm: FormGroup;
  propagateChange: any = () => {};
  propagateTouched: any = () => {};

  ngOnChanges(changes: SimpleChanges): void {
    this.myForm = this.formBuilder.group({});
    for (const item of this.config) {
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
  writeValue(_user: object): void {
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
