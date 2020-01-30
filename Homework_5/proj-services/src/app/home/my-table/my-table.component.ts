import { Component, OnInit, Input } from "@angular/core";
import { MyTableService } from "../../shared/services/my-table.service";

@Component({
  selector: "app-my-table",
  templateUrl: "./my-table.component.html",
  styleUrls: ["./my-table.component.scss"]
})
export class MyTableComponent implements OnInit {
  constructor(private _myTableService: MyTableService) {}

  public products = this._myTableService.getData();

  @Input()
  rows: number;

  currentProducts;
  currentCategory;

  categories = ["Все категории", "1", "2", "3"];

  ngOnInit() {
    this.currentProducts = this.products.slice(0, this.rows);
    this.currentCategory = "Все категории";
  }

  filterTable() {
    if (this.currentCategory != "Все категории") {
      this.currentProducts = this.products.filter(
        item => item.category == this.currentCategory
      );
    } else {
      this.currentProducts = this.products;
    }
  }

  classHideBtn: string = "hide";

  hideItem() {
    if (this.currentCategory != "Все категории") {
      return this.classHideBtn;
    }
  }

  chooseCategory(categoryValue) {
    this.currentCategory = categoryValue;
    this.filterTable();
    this.hideItem();
  }

  delete(id: number) {
    this.products = this.products.filter(item => item.id != id);
    this.currentProducts = this.products;
    console.log(`id: ${id}`);
  }

  classRowRed: string = "colorRed";

  setColorRow(price: string) {
    if (+price > 500) {
      return this.classRowRed;
    }
  }

  newItem: NewItem = new NewItem(11, "product 11", 1100, 1);

  addItem() {
    this.products.push(
      new NewItem(
        this.newItem.id,
        this.newItem.name,
        this.newItem.price,
        this.newItem.category
      )
    );
    this.currentProducts = this.products;
  }
}

export class NewItem {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: number
  ) {}
}
