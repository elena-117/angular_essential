import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  public users: UserModel;
  public currentUser: UserModel;
  public id: string;
  public showInfo: string;
  public formUpd: UserModel;
  public userEditForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _httpService: HttpService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.params);

    this.activatedRoute.params.forEach(params => {
      if (params["id"]) {
        this.id = params["id"];
        this.getCurrentUser(this.id);
      } else {
        this.showInfo = `Нет id`;
      }
    });

    this.editForm();
  }

  getCurrentUser(id: string) {
    this._httpService.getCurrentUser(id).subscribe(res => {
      this.currentUser = res.result;
      this.formUpd = this.currentUser;
    });
  }

  editForm() {
    this.userEditForm = this.fb.group({
      id: new FormControl({ value: "", disabled: true }),
      first_name: new FormControl(),
      last_name: new FormControl(),
      dob: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      website: new FormControl(),
      address: new FormControl()
    });

    this.userEditForm.valueChanges.subscribe(res => {
      for (const key in res) {
        if (res[key] != null) this.formUpd[key] = res[key];
        // console.log(this.formUpd[key]);
      }
    });
  }

  setEmptyForm() {
    this.userEditForm.patchValue({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: ""
    });
  }

  editUser(id: string) {
    this._httpService.editCurrentUser(id, this.formUpd).subscribe(res => {
      this.currentUser = res.result;
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() => this.router.navigate([`users/user-details/${id}`]));
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

  goBack() {
    this.router.navigate(["../../"], {
      relativeTo: this.activatedRoute
    });
  }
}