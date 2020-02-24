import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { JwPaginationComponent } from "jw-angular-pagination";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent,
    EditUserComponent,
    JwPaginationComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class UsersModule {}
