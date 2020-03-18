import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    let user = JSON.parse(localStorage.getItem("currentUser"));
    console.log(user);
    if (user) {
      return true;
    } else {
      this.router.navigate(["/login"]);
    }
  }
}
