import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsService } from "./services/products.service";
import { AuthGuardService } from "./services/auth-guard.service";

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ProductsService, AuthGuardService]
})
export class SharedModule {}
