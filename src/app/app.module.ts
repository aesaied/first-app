import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SecondComponent } from './second/second.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { FortgetPasswordComponent } from './account/fortget-password/fortget-password.component';
import { MyBoxComponent } from './my-box/my-box.component';
import { TestContentComponent } from './test-content/test-content.component';
import { MyBox2Component } from './my-box2/my-box2.component';
import { MyStrListComponent } from './my-str-list/my-str-list.component';
import { TestChildComponent } from './test-child/test-child.component';
import { TestParentComponent } from './test-parent/test-parent.component';

import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    SecondComponent,
    HeaderComponent,
    AccountComponent,
    LoginComponent,
    FortgetPasswordComponent,
    MyBoxComponent,
    TestContentComponent,
    MyBox2Component,
    MyStrListComponent,
    TestChildComponent,
    TestParentComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
