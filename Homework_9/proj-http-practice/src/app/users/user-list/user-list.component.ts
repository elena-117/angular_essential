import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { HttpService } from "src/app/shared/services/http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users: UserModel;
  currentUser: UserModel;

  constructor(
    private _httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._httpService.getUsers().subscribe(res => {
      this.users = res.result;
    });
  }

  getCurrentUser(selected: UserModel) {
    this.router.navigate(["user-details/", selected.id], {
      relativeTo: this.activatedRoute
    });
    // this.currentUser = selected;
  }

  editCurrentUser(selected: UserModel) {
    this.router.navigate(["edit-user/", selected.id], {
      relativeTo: this.activatedRoute
    });
  }

  createUser() {
    this.router.navigate(["create"], {
      relativeTo: this.activatedRoute
    });
  }

  deleteUser(id: string) {
    if (confirm("Are you sure you want to delete this item?")) {
      this._httpService.deleteCurrentUser(id).subscribe(res => {
        this.currentUser = res.result;
      });
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate(["users"]));
    } else {
      return;
    }
  }
}
