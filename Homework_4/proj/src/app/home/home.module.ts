import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { MainComponent } from "./main/main.component";
import { MyTableComponent } from "./my-table/my-table.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [MainComponent, MyTableComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule]
})
export class HomeModule {}
