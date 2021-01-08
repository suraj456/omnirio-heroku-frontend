import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path : '', component : ListUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
