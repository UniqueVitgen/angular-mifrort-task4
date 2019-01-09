import { Component, OnInit } from '@angular/core';
import {User} from '../../classes/user';
import {ConfigForm} from '../../classes/config-form';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  config = <ConfigForm[]> [
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
      name: 'confirm Email',
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
  user: User;
  countChanges: number = 0;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }
  changeUser() {
    this.countChanges ++;
    console.log(this.countChanges);
  }

}
