import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { HttpService } from "src/app/shared/services/http.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  items = [];
  pageOfItems: Array<any>;
  pageSize: number;
  totalUsers: number;
  users: UserModel;
  currentUser: UserModel;

  constructor(
    private _httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.setPage();
  }

  displayUsers(pageNum: string) {
    this.subscription.add(
      this._httpService.getUsersPage(pageNum).subscribe(res => {
        this.users = res.result;
      })
    );
  }

  setPage() {
    this.subscription.add(
      this._httpService.getUsersPage("/users?page=1").subscribe(res => {
        this.totalUsers = res._meta.totalCount;
        this.items = Array(Math.round(res._meta.totalCount / 2))
          .fill(0)
          .map((x, i) => ({
            id: i + 1,
            pageNumber: `/users?page=${i / 10 + 1}`
          }));
      })
    );
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    this.displayUsers(this.pageOfItems[0].pageNumber);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
