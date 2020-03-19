import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/shared/services/users/users.service";
import { UsersResponseModel } from "src/app/shared/models/user.response.model";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  public currentUser: {};
  public curUser: UserModel;
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

  editUser(event, id: string) {
    // event.preventDefault();
    event.stopPropagation();
    this.router.navigate(["edit-user/", id], {
      relativeTo: this.activatedRoute
    });
    console.log(id);
  }

  deleteUser(event, id: string) {
    event.stopPropagation();
    if (confirm("Are you sure you want to delete this item?")) {
      this._userService.deleteUser(id).subscribe(res => {
        this.curUser = res.result;
      });
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate(["users"]));
    } else {
      return;
    }
  }
}
