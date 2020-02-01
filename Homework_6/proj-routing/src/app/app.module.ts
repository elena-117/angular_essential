import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { AdminModule } from "./admin/admin.module";
import { ProductsModule } from "./products/products.module";

import { ProductsService } from "./shared/services/products.service";
import { AuthGuardService } from "./shared/services/auth-guard.service";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ProductsModule, AdminModule],
  providers: [ProductsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
