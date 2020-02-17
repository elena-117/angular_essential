import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  public showInfo: string;
  public users: UserModel;
  public currentUser: UserModel;
  private id: string;
  public formUpd: UserModel;
  public userDetailsForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _userService: HttpService,
    private fb: FormBuilder
  ) {
    // console.log(this.activatedRoute.params);

    this.activatedRoute.params.forEach(params => {
      if (params["id"]) {
        this.id = params["id"];
        this.getCurrentUser(this.id);
      } else {
        this.showInfo = `Нет id`;
      }
    });
  }

  ngOnInit() {
    this.formDetails();
  }

  getCurrentUser(id: string) {
    this._userService.getCurrentUser(id).subscribe(res => {
      this.currentUser = res.result;
      this.formUpd = this.currentUser;
    });
  }

  formDetails() {
    this.userDetailsForm = this.fb.group({
      id: new FormControl({ value: "", disabled: true }),
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    });

    this.userDetailsForm.valueChanges.subscribe(res => {
      for (const key in res) {
        if (res[key] != null) this.formUpd[key] = res[key];
        console.log(this.formUpd[key]);
      }

      // this.userDetailsForm.get("first_name").valueChanges.subscribe(value => {
      //   console.log(value);
      // });
    });
  }

  deleteUser(id: string) {
    if (confirm("Are you sure you want to delete this item?")) {
      this._userService.deleteCurrentUser(id).subscribe(res => {
        this.currentUser = res.result;
      });
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate(["users"]));
    } else {
      return;
    }
  }

  updateUser(id: string) {
    this._userService.updateCurrentUser(id, this.formUpd).subscribe(res => {
      this.currentUser = res.result;
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate([`users/user-details/${id}`]));
    });
  }
}
