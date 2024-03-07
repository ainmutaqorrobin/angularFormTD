import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(`form`) signUpForm: NgForm;
  defaultQuestion: string = `ex`;
  answer: string = '';
  genders: string[] = [`male`, `female`];
  submitted: boolean = false;
  user = {
    username: ``,
    email: ``,
    gender: ``,
    secret: ``,
    questionAnswer: ``,
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: `ainkacak@gmail.com`,
    //   },
    //   secret: `pet`,
    //   gender: `female`,
    //   questionAnswer: `THIS IS IN COMPONENT`,
    // });
    this.signUpForm.form.patchValue({ userData: { username: suggestedName } });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.secret = this.signUpForm.value.secret;
    this.user.questionAnswer = this.signUpForm.value.questionAnswer;
    this.signUpForm.reset();
  }
}
