import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./shared/services/auth-guard.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "users",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then(m => m.UsersModule),
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
