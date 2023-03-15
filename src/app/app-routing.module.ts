import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { SecondComponent } from './second/second.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { FortgetPasswordComponent } from './account/fortget-password/fortget-password.component';
import { TestContentComponent } from './test-content/test-content.component';

const routes: Routes = [

  { path: '', component: TaskListComponent },

  { path: 'second', component: SecondComponent }
  ,
  { path: 'test-conent', component: TestContentComponent }

  ,
  {
    path: 'account', component: AccountComponent,

    children: [
      {
        path: 'forgetPassword', component: FortgetPasswordComponent
      }
      ,
      {
        path: 'login', component: LoginComponent
      }
      ,
      { path: '', redirectTo: '/login', pathMatch: 'full' },




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
