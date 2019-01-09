import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormComponent } from './my-form.component';
import {MaterialModule} from '../../modules/material/material.module';
import {DirectiveModule} from '../../modules/directive/directive.module';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule, By} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {DebugElement} from '@angular/core';
import {ConfigForm} from '../../classes/config-form';
import {log} from 'util';
import {OnlyNumbersDirective} from '../../directives/only-numbers/only-numbers.directive';

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;
  let ageEl: DebugElement;
  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();
  let config: ConfigForm[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFormComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        DirectiveModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    config = [
      {
        type: 'string',
        name: 'name',
        validators: [Validators.required]
      },
      {
        type: 'number',
        name: 'age',
        validators: [Validators.min(0), Validators.max(100)]
      },
      {
        type: 'string',
        name: 'email',
        validators: [Validators.email, Validators.required]
      },
      {
        type: 'confirm',
        name: 'confirm',
        confirmableProp: 'email',
        confirmatorProp: 'confirm',
        validators: []
      },
      {
        type: 'select',
        name: 'skill',
        validators: [Validators.required],
        options: ['Java', 'Js', 'Angular', 'React.js'],
      }
    ];
    component.config = config;
    component.ngOnChanges(null);
    fixture.detectChanges();
    // submitEl = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid because empty', () => {
    // if (component.myForm) {
      expect(component.myForm.invalid).toBeTruthy();
    // }
  });

  it('should be valid', () => {
    component.myForm.setValue({
      name: '2424',
      age: '24',
      email: 'valid@mail.ru',
      confirm: 'valid@mail.ru',
      skill: 'Java'
    });
    fixture.detectChanges();
    expect(component.myForm.valid).toBeTruthy();
  });

  it('should be invalid because not match email', () => {
    component.myForm.setValue({
      name: '2424',
      age: '24',
      email: 'valid@mail.ru',
      confirm: 'valid1@mail.ru',
      skill: 'Java'
    });
    fixture.detectChanges();
    expect(component.myForm.invalid).toBeTruthy();
  });

  describe('writeValue',() => {
    it('should do', () => {
      component.writeValue({
        name: '2424',
        age: '24',
        email: 'valid@mail.ru',
        confirm: 'valid@mail.ru',
        skill: 'Java'
      });
    });
  });
  describe('registeronchange', () => {
    it('should do', () => {
      component.registerOnChange(null);
    });
  });
  describe('registerontouched', () => {
    it('should do', () => {
      component.registerOnTouched(null);
    });
  });
  describe('onchange', () => {
    it('should do', () => {
      component.onChange(null);
    });
  });
});
