import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { SecondComponent } from './second/second.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { FortgetPasswordComponent } from './account/fortget-password/fortget-password.component';
import { TestContentComponent } from './test-content/test-content.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [

  { path: '', component: TaskListComponent }


  ,

  { path: 'create-emp', component: CreateEmployeeComponent }
  ,

  { path: 'parent', component: TestParentComponent }
  ,

  { path: 'second', component: SecondComponent }
  ,
  { path: 'test-conent', component: TestContentComponent }

  ,
  {
    path: 'account', component: AccountComponent,

    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'forgetPassword', component: FortgetPasswordComponent
      }
      ,
      {
        path: 'login', component: LoginComponent
      }





    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
