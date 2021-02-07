import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(private builder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.forgotPasswordForm = this.builder.group({
      email: ['', Validators.required],
      dob: ['', Validators.required]
    })
  }

  submit() {
    window.sessionStorage.setItem('email', this.forgotPasswordForm.get('email').value);
    this.userService.forgotPassword(this.forgotPasswordForm.get('email').value, this.forgotPasswordForm.get('dob').value).subscribe(
      response => {
        console.log("Redirecting to change password.");
        this.router.navigateByUrl('/changePassword');
      },
      error => {
        console.log("Wrong details. Redirecting back.");
        this.router.navigateByUrl('/login');
      }
    );
  }
}