import { Injectable } from "@angular/core";
import { Product } from "../product";

let products = [
  new Product(1, "product 1", 200, 2),
  new Product(2, "product 2", 100, 1),
  new Product(3, "product 3", 300, 1),
  new Product(4, "product 4", 400, 3),
  new Product(5, "product 5", 500, 2),
  new Product(6, "product 6", 600, 3),
  new Product(7, "product 7", 700, 3),
  new Product(8, "product 8", 800, 1),
  new Product(9, "product 9", 900, 2),
  new Product(10, "product 10", 100, 3)
];

let productsPromise = Promise.resolve(products);

@Injectable()
export class ProductsService {
  getAll(): Promise<Product[]> {
    return productsPromise;
  }

  getProduct(id: number): Promise<Product> {
    return productsPromise.then(products => products.find(x => x.id == id));
  }

  constructor() {}
}
