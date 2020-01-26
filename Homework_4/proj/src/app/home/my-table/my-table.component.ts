import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-my-table",
  templateUrl: "./my-table.component.html",
  styleUrls: ["./my-table.component.scss"]
})
export class MyTableComponent implements OnInit {
  products = Array(
    { id: 1, name: "product 1", price: 100 },
    { id: 2, name: "product 2", price: 200 },
    { id: 3, name: "product 3", price: 300 },
    { id: 4, name: "product 4", price: 400 },
    { id: 5, name: "product 5", price: 500 },
    { id: 6, name: "product 6", price: 600 },
    { id: 7, name: "product 7", price: 700 },
    { id: 8, name: "product 8", price: 800 },
    { id: 9, name: "product 9", price: 900 },
    { id: 10, name: "product 10", price: 1000 }
  );

  @Input()
  rows: number;

  setNumberRows() {
    this.products = this.products.slice(0, this.rows);
  }
  constructor() {}

  ngOnInit() {
    this.setNumberRows();

    console.log(this.rows);
  }

  delete(id: number) {
    this.products = this.products.filter(item => item.id != id);
    console.log(`id: ${id}`);
  }

  classRowRed: string = "colorRed";

  setColorRow(price: string) {
    if (+price > 500) {
      return this.classRowRed;
    }
  }

  categories = ["Category 1", "Category 2", "Category 3"];

  productsItems = this.products;

  onChange(categoryValue: string) {
    if (categoryValue == "Category 1") {
      this.products = this.productsItems.filter(item => item.price);
    }
    if (categoryValue == "Category 2") {
      this.products = this.productsItems.filter(item => item.price > 500);
    }
    if (categoryValue == "Category 3") {
      this.products = this.productsItems.filter(item => item.price <= 500);
    }
  }

  newItem: NewItem = new NewItem(11, "product 11", 1100);

  addItem() {
    this.products.push(
      new NewItem(this.newItem.id, this.newItem.name, this.newItem.price)
    );
    console.log(this.products, this.productsItems);
  }
}

export class NewItem {
  constructor(public id: number, public name: string, public price: number) {}
}
