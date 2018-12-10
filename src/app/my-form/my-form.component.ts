import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SkillEnum} from '../skill-enum.enum';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit, OnChanges {
  @Input() user: any;
  @Input() type: any;
  @Output('onChange') outputOnChange: EventEmitter<any> = new EventEmitter();
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      confirm: ['', Validators.compose([Validators.requiredTrue])],
      age: ['', Validators.compose([Validators.required])],
      skill: [<SkillEnum> SkillEnum.COMMUNICABLE, [Validators.required]],
      text: ['', Validators.compose([])]
    });
    this.myForm.valueChanges.subscribe(res => {
      console.log(this.myForm);
    });
    this.myForm.statusChanges.subscribe(resStatus => {

    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
