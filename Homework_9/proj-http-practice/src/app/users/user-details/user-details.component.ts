import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { UserModel } from "src/app/shared/models/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public currentUser: UserModel;
  public id: string;
  public showInfo: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _httpService: HttpService,
    private router: Router
  ) {}
  ngOnInit() {
    this.activatedRoute.params.forEach(params => {
      if (params["id"]) {
        this.id = params["id"];
        this.getCurrentUser(this.id);
      } else {
        this.showInfo = `Нет id`;
      }
    });
  }
  getCurrentUser(id: string) {
    this.subscription.add(
      this._httpService.getCurrentUser(id).subscribe(res => {
        this.currentUser = res.result;
      })
    );
  }

  goBack() {
    this.router.navigate(["../../"], {
      relativeTo: this.activatedRoute
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
