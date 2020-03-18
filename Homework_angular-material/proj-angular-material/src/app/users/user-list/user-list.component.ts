import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/shared/services/users/users.service";
import { UsersResponseModel } from "src/app/shared/models/user.response.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  public currentUser: {};
  public userDataArray: UsersResponseModel;

  constructor(
    private router: Router,
    private _userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this._userService.getUsers().subscribe(res => {
      this.userDataArray = res;
    });
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate(["login"]);
  }

  editUser(event, id) {
    // event.preventDefault();
    event.stopPropagation();
    this.router.navigate(["edit-user/", id], {
      relativeTo: this.activatedRoute
    });
    console.log(id);
  }
}
