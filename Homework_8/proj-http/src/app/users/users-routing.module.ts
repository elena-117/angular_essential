import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const routes: Routes = [
  {
    path: "users",
    component: UsersListComponent,
    children: [
      {
        path: "user-details/:id",
        component: UserDetailsComponent
      },
      {
        path: "user-details",
        component: UserDetailsComponent
      }
    ]
  }
  // {
  //   path: "users-details",
  //   component: UserDetailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
