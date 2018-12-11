import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ContainerComponent } from './components/container/container.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {DirectiveModule} from './modules/directive/directive.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    ContainerComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DirectiveModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
