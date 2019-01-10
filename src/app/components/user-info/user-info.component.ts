import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../../classes/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Input() count: number;

  constructor() { }

  ngOnInit(): void {
  }
  strignifyUser(user: User): string {
    return JSON.stringify(user).replace(/,/g, ', \n');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
  }

}
