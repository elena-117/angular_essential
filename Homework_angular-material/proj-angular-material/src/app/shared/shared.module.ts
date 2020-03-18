import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginService } from "./services/login.service";
import { HttpTokenInterceptor } from "./interceptors/http.token.interceptor";
import { UsersService } from "./services/users/users.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LoginService, HttpTokenInterceptor, UsersService]
})
export class SharedModule {}
