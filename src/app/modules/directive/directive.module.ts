import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OnlyNumbersDirective} from '../../directives/only-numbers/only-numbers.directive';

@NgModule({
  declarations: [
    OnlyNumbersDirective
  ],
  imports: [
  ],
  exports: [
    OnlyNumbersDirective
  ]
})
export class DirectiveModule { }
