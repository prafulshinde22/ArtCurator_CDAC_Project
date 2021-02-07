import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'

/**
 *
 * @param form
 */

function passwordsMatchValidator(form) {
  const newPassword = form.get('newPassword')
  const confirmPassword = form.get('confirmPassword')

  if (newPassword.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/**
 * If the data is valid return null else return an object
 */
function symbolValidator(control) { //control = registerForm.get('password')
  if (control.hasError('required')) return null;
  if (control.hasError('minlength')) return null;

  if (control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  updatePasswordForm: FormGroup;
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
    this.updatePasswordForm = this.builder.group({

      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator

    })
  }

  updatePassword() {
    this.userService.updatePassword(this.updatePasswordForm.get('oldPassword').value, this.updatePasswordForm.get('newPassword').value).subscribe(
      response => {
        console.log("Password updated.");
        this.isUpdated = true;
      },
      error => {
        console.log("Password updation unsuccessful.");
      },
      () => {
        if (this.isSeller) {
          this.router.navigateByUrl('/sellerhome');
          setTimeout(() => {
            this.router.navigateByUrl('/sellerhome');
          }, 2000);
        }

        if (this.isBuyer) {
          this.router.navigateByUrl('/buyerhome');
          setTimeout(function () {
            this.router.navigateByUrl('/buyerhome');
          }, 2000);
        }
      }
    );
  }

}
