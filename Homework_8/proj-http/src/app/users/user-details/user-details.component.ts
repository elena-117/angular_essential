import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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
  public data: any;
  private id: string;

  // public images: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _userService: HttpService,
    private fb: FormBuilder
  ) {
    console.log(this.activatedRoute.params);

    this.activatedRoute.params.forEach(params => {
      if (params["id"]) {
        this.id = params["id"];
        this.getCurrentUser(this.id);
      } else {
        this.showInfo = `Нет id`;
      }
    });
  }

  userDetailsForm: FormGroup;

  ngOnInit() {
    this.formDetails();
  }

  formDetails() {
    this.userDetailsForm = this.fb.group({
      id: new FormControl({ value: "", disabled: true }),
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      address: new FormControl()
    });
  }

  getCurrentUser(id: string) {
    this._userService.getCurrentUser(id).subscribe(res => {
      this.data = res.result;
      console.log(res);
    });
  }

  deleteUser(id: string) {
    if (confirm("Delete this user?")) {
      this._userService.deleteCurrentUser(id).subscribe(res => {
        this.data = res.result;
      });
    } else {
      return;
    }
  }

  updateUser(id, formUpd) {
    this._userService.updateCurrentUser(id, formUpd).subscribe(res => {
      console.log(res.result);
      // this.data = res;
      // console.log(res);
    });
  }
}
