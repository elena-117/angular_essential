import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { LoginService } from "src/app/shared/services/login.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public invalid: boolean = false;
  public loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      userName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    });
  }

  signUp() {
    if (
      this.signUpForm.valid &&
      this.signUpForm.touched &&
      this.signUpForm.controls.password.value ===
        this.signUpForm.controls.confirmPassword.value
    ) {
      this.invalid = false;
      this.loading = true;

      this.signUpForm.value;

      this.signUpForm.reset({
        userName: this.signUpForm.get("userName").value,
        email: this.signUpForm.get("email").value,
        password: this.signUpForm.get("password").value
      });
      console.log(this.signUpForm.value);

      this.loginService.signUp(this.signUpForm.value).subscribe(res => {
        this.loading = false;
      });
    } else {
      this.invalid = true;
    }
  }
}
