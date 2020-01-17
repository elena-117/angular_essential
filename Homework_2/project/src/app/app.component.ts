import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "project";

  public arr: Array<string> = [
    "Hello World",
    "Привет Мир",
    "Привіт Світ",
    "Hola Mundo",
    "Bonjour le monde",
    "Hallo Welt",
    "Ciao mondo",
    "Witaj świecie",
    "Hej världen",
    "Pozdravljen, svet",
    "Прывітанне Сусвет"
  ];

  funcMsg(item) {
    alert(item);
  }

  ngOnInit() {}
}
