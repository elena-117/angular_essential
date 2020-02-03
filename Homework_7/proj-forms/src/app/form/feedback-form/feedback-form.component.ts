import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class feedback {
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
export class FeedbackFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

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

    this.onChanges();
  }

  onChanges(): void {
    this.feedbackForm.valueChanges.subscribe(val => {
      this.formattedMessage = `Hello,
  
      My name is ${val.name} and my email is ${val.email}.
  
      I would like to tell you that ${val.message}.`;
    });
  }

  onSubmit(form) {
    console.log(form.valid);
    console.log(form.value);
  }
}
