import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FeedbackFormComponent } from "./feedback-form/feedback-form.component";

@NgModule({
  declarations: [FeedbackFormComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormModule {}
