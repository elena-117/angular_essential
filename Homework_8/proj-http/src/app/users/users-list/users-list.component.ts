import { Component, OnInit, Input } from "@angular/core";
import { HttpService } from "src/app/shared/services/http.service";
import { UserModel } from "src/app/shared/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  // public users: UsersResponseModel;
  public users: Array<UserModel>;
  currentUser: UserModel;

  constructor(
    private _userService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._userService.getUsers().subscribe(res => {
      this.users = res.result;
      console.log(res.result);
    });

    // let newUser = {
    //   first_name: "Rrian1",
    //   last_name: "Batke1",
    //   gender: "male",
    //   email: "zzzz@zz.com",
    //   status: "active"
    // };

    // this._userServise.setUsers(newUser).subscribe(res => {
    //   console.log(res);
    // });
  }

  getCurrentUser(id: string) {
    this._userService.getCurrentUser(id).subscribe(res => {
      console.log(res);
    });
  }
  deleteCurrentUser(id: string) {
    this._userService.deleteCurrentUser(id).subscribe(res => {
      console.log(res);
    });
  }

  onSelect(selected: UserModel) {
    this.router.navigate(["user-details/", selected.id], {
      relativeTo: this.activatedRoute
    });
    this.currentUser = selected;
    console.log(this.currentUser);
  }
}
