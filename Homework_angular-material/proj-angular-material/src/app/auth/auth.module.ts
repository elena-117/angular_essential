import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule {}
