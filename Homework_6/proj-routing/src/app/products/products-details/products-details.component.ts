import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/product";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "src/app/shared/services/products.service";

@Component({
  selector: "app-products-details",
  templateUrl: "./products-details.component.html",
  styleUrls: ["./products-details.component.scss"]
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let id = +params["id"];
      console.log(id);
      this.service.getProduct(id).then(result => (this.product = result));
    });
  }

  hide() {
    this.router.navigate(["../"], {
      relativeTo: this.activatedRoute
    });
  }
}
