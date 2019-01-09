/* tslint:disable:no-unused-variable */
import {TestBed, ComponentFixture, fakeAsync} from '@angular/core/testing';
import {Component, DebugElement, EventEmitter, Output} from '@angular/core';
import {By} from '@angular/platform-browser';
import {OnlyNumbersDirective} from './only-numbers.directive';

@Component({
  template: `<input (keydown)="changed($event)" type="text" only-numbers>`
})
class TestOnlyNumbersComponent {
  @Output() changes = new EventEmitter();
  changed(event) {
    this.changes.emit(event);
  }
}


describe('Directive: OnlyNumbersDirective', () => {

  let component: TestOnlyNumbersComponent ;
  let fixture: ComponentFixture<TestOnlyNumbersComponent >;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestOnlyNumbersComponent , OnlyNumbersDirective]
    });
    fixture = TestBed.createComponent(TestOnlyNumbersComponent );
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });
  describe('onKeyDown', () => {
    it('should return true', (done) => {
      inputEl.triggerEventHandler('onkeydown', {
        code: 55
      });
      inputEl.componentInstance.changes.subscribe(() => {
        expect(inputEl.nativeElement.value).toEqual('1');
        done();
      });
      fixture.detectChanges();
    });
  });

});
