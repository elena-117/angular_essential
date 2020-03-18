import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "src/app/shared/services/users/users.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"]
})
export class EditUserComponent implements OnInit {
  public userForm: FormGroup;
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
        this.firstName = res.result.first_name;
        this.lastName = res.result.last_name;
        this.id = res.result.id;

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
      });
  }
}
