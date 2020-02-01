import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { Product } from "src/app/shared/product";
import { ProductsService } from "src/app/shared/services/products.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.productsService.getAll().then(result => (this.products = result));
    });
  }

  onSelect(selected: Product) {
    this.router.navigate([selected.id], { relativeTo: this.activatedRoute });
  }
}
