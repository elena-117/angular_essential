import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/shared/models/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "src/app/shared/services/http.service";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

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
  public userForm: FormGroup;
  public userForm2: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _httpService: HttpService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // console.log(this.activatedRoute.params);

    this.activatedRoute.params.forEach(params => {
      if (params["id"]) {
        this.id = params["id"];
        this.getCurrentUser(this.id);
      } else {
        this.showInfo = `Нет id`;
      }
    });
    this.createForm();
  }

  getCurrentUser(id: string) {
    this._httpService.getCurrentUser(id).subscribe(res => {
      this.currentUser = res.result;
      this.editForm(this.currentUser);
      this.formUpd = this.currentUser;
    });
  }

  editForm(currentUser: UserModel) {
    this.userForm = this.fb.group({
      id: [{ value: currentUser["id"], disabled: true }],
      first_name: [currentUser["first_name"], Validators.required],
      last_name: [currentUser["last_name"], Validators.required],
      dob: [
        currentUser["dob"],
        [Validators.required, Validators.pattern("[0-9]{4}-[0-9]{2}-[0-9]{2}")]
      ],
      gender: [currentUser["gender"], Validators.required],
      email: [
        currentUser["email"],
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ]
      ],
      phone: [currentUser["phone"], [Validators.required]],
      website: [
        currentUser["website"],
        [
          Validators.required,
          Validators.pattern("^https?://.+[^s/$.?#].[^s]*$")
        ]
      ],
      address: [currentUser["address"], Validators.required],
      status: [currentUser["status"], Validators.required]
    });

    this.userForm.valueChanges.subscribe(res => {
      for (const key in res) {
        if (res[key] != null) this.formUpd[key] = res[key];
        // console.log(this.formUpd[key]);
      }
    });
  }

  editUser(id: string) {
    if (this.userForm.valid) {
      this._httpService.editCurrentUser(id, this.formUpd).subscribe(res => {
        this.currentUser = res.result;
        this.router
          .navigateByUrl("/", { skipLocationChange: true })
          .then(() => this.router.navigate([`users/user-details/${id}`]));
      });
    }
  }

  createForm() {
    this.userForm2 = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      dob: [
        "",
        [Validators.required, Validators.pattern("[0-9]{4}-[0-9]{2}-[0-9]{2}")]
      ],
      gender: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ]
      ],
      phone: ["", [Validators.required]],
      website: [
        "",
        [
          Validators.required,
          Validators.pattern("^https?://.+[^s/$.?#].[^s]*$")
        ]
      ],
      address: ["", Validators.required]
    });

    this.formUpd = {
      first_name: "",
      last_name: "",
      dob: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      gender: ""
    };

    this.userForm2.valueChanges.subscribe(res => {
      for (const key in res) {
        if (res[key] != null) this.formUpd[key] = res[key];
      }
    });
  }

  createUser() {
    this._httpService.setUser(this.formUpd).subscribe(res => {
      this.formUpd = res;
      console.log(res);
      this.router
        .navigateByUrl("/", { skipLocationChange: true })
        .then(() =>
          this.router.navigate([`users/user-details/${res["result"]["id"]}`])
        );
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

  goBack2() {
    this.router.navigate(["../"], {
      relativeTo: this.activatedRoute
    });
  }
}
