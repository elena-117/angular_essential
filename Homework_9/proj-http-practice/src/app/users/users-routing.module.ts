import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  {
    path: "users",
    component: UserListComponent
  },
  {
    path: "users/user-details/:id",
    component: UserDetailsComponent
  },
  {
    path: "users/edit-user/:id",
    component: EditUserComponent
  },
  {
    path: "users/create",
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
