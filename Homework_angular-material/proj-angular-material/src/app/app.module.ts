import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpTokenInterceptor } from "./shared/interceptors/http.token.interceptor";
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
