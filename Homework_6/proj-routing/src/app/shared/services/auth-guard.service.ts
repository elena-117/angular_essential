import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  canActivate() {
    let value = true;
    console.log("AuthGuard canActivate return " + value);
    return value;
  }
}
