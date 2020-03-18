import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private router: Router) {}

  login(form) {
    const userObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(form);
        let usersArray = JSON.parse(localStorage.getItem("Users"));
        usersArray.forEach(element => {
          if (
            element.email === form.email &&
            element.password === form.password
          ) {
            localStorage.setItem("currentUser", JSON.stringify(element));
            this.router.navigate(["users"]);
          }
        });
      }, 1000);
    });
    return userObservable;
  }

  signUp(form) {
    const userObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(form);
        let usersArray = JSON.parse(localStorage.getItem("Users"));
        if (usersArray) {
          usersArray.push(form);
          localStorage.setItem("Users", JSON.stringify(usersArray));
          localStorage.setItem("currentUser", JSON.stringify(form));
          this.router.navigate(["users"]);
        } else {
          let newUsersArray = [];
          newUsersArray.push(form);
          localStorage.setItem("Users", JSON.stringify(newUsersArray));
          localStorage.setItem("currentUser", JSON.stringify(form));
          this.router.navigate(["users"]);
        }
      }, 1000);
    });
    return userObservable;
  }
}
