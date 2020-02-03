import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FormService {
  constructor() {}

  sendForm(form) {
    // console.log(form);
    const feedbackForm = new Observable(observer => {
      setTimeout(() => {
        observer.next(form);
      }, 1000);
    });

    return feedbackForm;
  }
}
