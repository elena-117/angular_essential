import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "./shared/shared.module";
import { UsersModule } from "./users/users.module";
import { HttpTokenInterceptor } from "./shared/interceptors/http.token.interceptor";
import { HttpService } from "./shared/services/http.service";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UsersModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
