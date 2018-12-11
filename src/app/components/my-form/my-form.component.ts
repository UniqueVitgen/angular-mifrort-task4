import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
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
export class MyFormComponent implements OnInit, OnChanges,  ControlValueAccessor {

  constructor(private formBuilder: FormBuilder,
              private validateService: ValidateService) {
  }
  @Input() object: any;
  @Input() config: ConfigForm[];
  @Output('onChange') outputOnChange: EventEmitter<any> = new EventEmitter();
  myForm: FormGroup;
  propagateChange: any = () => {};

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.config);
    this.myForm = this.formBuilder.group({});
    for (const item of this.config) {
      this.myForm.addControl(item.name, this.formBuilder.control('', Validators.compose(<any>item.validators)));
      if (item.type === 'confirm') {
        this.myForm.setValidators(this.validateService.checkByEquals(item.confirmableProp, item.name));
      }
    }
    this.myForm.valueChanges.subscribe(resObject => {
      console.log('form', resObject);
      this.outputOnChange.emit(resObject);
      this.propagateChange(resObject);
    });
    // this.myForm = this.formBuilder.group({});
  }
  writeValue(_user: any) {
    if ( _user ) {
      this.object = _user;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: () => void): void { }

  onChange(event) {
  }
    // for(let )
    // this.myForm = this.formBuilder.group({});
    // this.myForm.addControl('name', new FormControl('', [Validators.compose(Validators.required())]));
    // this.myForm.valueChanges.subscribe(res => {
    //   console.log(this.myForm);
    //   this.outputOnChange.emit(res);
    // });
}
