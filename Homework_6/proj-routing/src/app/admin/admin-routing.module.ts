import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { ManageProductsComponent } from "./manage-products/manage-products.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { AuthGuardService } from "../shared/services/auth-guard.service";

const routes: Routes = [
  {
    path: "admin",
    component: AdminHomeComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        children: [
          {
            path: "",
            redirectTo: "products",
            pathMatch: "full"
          },
          {
            path: "products",
            component: ManageProductsComponent
          },
          {
            path: "users",
            component: ManageUsersComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
