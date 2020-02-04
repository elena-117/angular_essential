import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormService } from "src/app/shared/services/form.service";
import { User } from "src/app/shared/models/user.model";
import { Subscription } from "rxjs";

export class UserForm {
  name: string;
  email: string;
  phone: number;
  message: string;
}

@Component({
  selector: "app-feedback-form",
  templateUrl: "./feedback-form.component.html",
  styleUrls: ["./feedback-form.component.scss"]
})
export class FeedbackFormComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder, private _formService: FormService) {}

  feedbackForm: FormGroup;
  formattedMessage: string;

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phone: [
        "",
        [Validators.required, Validators.pattern("^((\\+38-?)|0)?[0-9]{10}$")]
      ],
      message: ["", Validators.required]
    });
  }

  sendForm() {
    // console.log(this.feedbackForm);
    if (this.feedbackForm.valid) {
      this.subscription.add(
        this._formService
          .sendForm(this.feedbackForm.value as User)
          .subscribe(res => {
            console.log(res);
          })
      );
    }
  }

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
