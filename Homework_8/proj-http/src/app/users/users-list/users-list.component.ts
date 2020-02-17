import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { UserModel } from "src/app/shared/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  public users: UserModel;
  public currentUser: UserModel;

  constructor(
    private _userService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._userService.getUsers().subscribe(res => {
      this.users = res.result;
    });
  }

  getCurrentUser(selected: UserModel) {
    this.router.navigate(["user-details/", selected.id], {
      relativeTo: this.activatedRoute
    });
    this.currentUser = selected;
  }
}
