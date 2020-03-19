import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/shared/services/users/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserModel } from "src/app/shared/models/user.model";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  public userForm: FormGroup;
  public formUpd: UserModel;
  public currentUser: UserModel;
  public firstName: string;
  public lastName: string;
  public id: string;

  constructor(
    private router: Router,
    private actvatedRoute: ActivatedRoute,
    private _usersService: UsersService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this._usersService
      .getCurrentUser(this.actvatedRoute.snapshot.params.id)
      .subscribe(res => {
        this.currentUser = res.result;
        this.firstName = res.result.first_name;
        this.lastName = res.result.last_name;
        this.id = res.result.id;
        this.formUpd = this.currentUser;

        this.userForm = this.fb.group({
          address: res.result.address,
          dob: res.result.dob,
          email: res.result.email,
          first_name: res.result.first_name,
          gender: res.result.gender,
          id: res.result.id,
          last_name: res.result.last_name,
          phone: res.result.phone,
          status: res.result.status,
          website: res.result.website
        });
        console.log(res);

        this.userForm.valueChanges.subscribe(res => {
          for (const key in res) {
            if (res[key] != null) {
              this.formUpd[key] = res[key];
            }
          }
        });
      });
  }

  editUser(id: string) {
    if (this.userForm.valid) {
      this._usersService.editUser(id, this.formUpd).subscribe(res => {
        this.currentUser = res.result;
      });
    }
  }

  back() {
    this.router.navigate(["../../"], {
      relativeTo: this.actvatedRoute
    });
  }
}
