import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list/user-list.component";
import { EditUserComponent } from "./edit-user/edit-user.component";

const routes: Routes = [
  {
    path: "",
    component: UserListComponent
  },
  {
    path: "edit-user/:id",
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
