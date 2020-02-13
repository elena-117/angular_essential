import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UsersListComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule]
})
export class UsersModule {}
