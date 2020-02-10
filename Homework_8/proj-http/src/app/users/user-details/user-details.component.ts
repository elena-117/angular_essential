import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, ParamMap } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { HttpClient } from "@angular/common/http";
import { Subscription, Observable } from "rxjs";
import { UsersResponseModel } from "src/app/shared/models/users.response.model";
import { UserModel } from "src/app/shared/models/user.model";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  public users: UserModel;
  currentUser: Observable<UserModel>;
  subscription: Subscription;
  id: UserModel;
  firstName: UserModel[];
  lastName: UserModel;
  address: UserModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: HttpService,
    private http: HttpClient,
    private _userService: HttpService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      console.log("123");
      let id = +params["id"];
      console.log(id);
    });
  }
}
