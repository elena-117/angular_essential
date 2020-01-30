import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { MainComponent } from "./main/main.component";
import { MyTableComponent } from "./my-table/my-table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MyTableService } from "../shared/services/my-table.service";

@NgModule({
  declarations: [MainComponent, MyTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [MyTableService]
})
export class HomeModule {}
