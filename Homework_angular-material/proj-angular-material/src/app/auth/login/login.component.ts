import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { LoginService } from "src/app/shared/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public invalid: boolean = false;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    });
  }

  login() {
    if (this.loginForm.valid && this.loginForm.touched) {
      this.invalid = false;
      this.loading = true;
      this.loginService.login(this.loginForm.value).subscribe(res => {
        console.log(res);
        this.loading = false;
        this.router.navigate(["users"]);
      });
    } else {
      this.invalid = true;
    }
  }
}
