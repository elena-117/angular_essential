import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { MaterialModule } from "../material/material.module";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [UserListComponent, EditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {}
