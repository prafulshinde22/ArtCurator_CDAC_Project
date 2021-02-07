import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Login } from '../../../models/login.model';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSuccess: boolean = null;

  constructor(private router: Router, private builder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.builder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.userService.authenticate
      (new Login(this.loginForm.get('name').value, this.loginForm.get('password').value)).subscribe(
        response => {
          this.loginSuccess = true;
          this.userService.getUser();
        },
        error => {
          this.loginSuccess = false;
          this.buildForm();
        }
      );
  }
}