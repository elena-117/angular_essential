import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor() {}

  sendForm(form: User) {
    const formObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(alert(`${form.name}, your message has been successfully sent!`));
      }, 1000);
    });

    return formObservable;
  }
}
