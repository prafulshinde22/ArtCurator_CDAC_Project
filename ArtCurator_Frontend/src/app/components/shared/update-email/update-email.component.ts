import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs/operators';
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css']
})
export class UpdateEmailComponent implements OnInit {

  updateEmailForm: FormGroup;
  isSeller: boolean = false;
  isBuyer: boolean = false;
  isUpdated: boolean = false;

  constructor(private builder: FormBuilder,
    private userService: UserService,
    private router: Router) {
    if (window.localStorage.user_role === "SELLER") {
      this.isSeller = true;
    }

    if (window.localStorage.user_role === "BUYER") {
      this.isBuyer = true;
    }
  }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.updateEmailForm = this.builder.group({
      newEmail: ['', [Validators.required, Validators.email]]
    })
  }

  updateEmail() {
    this.userService.changeEmail(this.updateEmailForm.get('newEmail').value).subscribe(
      response => {
        console.log("Email updated.");
        this.isUpdated = true;
        window.localStorage.clear();
        setTimeout(() => {
          this.router.navigateByUrl('/logout');
        }, 5000);
      },
      error => {
        console.log("Email updation unsuccessful.");
      },
      () => {
        if (this.isSeller) {
          setTimeout(function () {
            this.router.navigateByUrl('app-nav-seller');
          }, 5000);
        }

        if (this.isBuyer) {
          setTimeout(function () {
            this.router.navigateByUrl('app-nav-user');
          }, 5000);
        }
      }
    );
  }
}