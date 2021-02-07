import { UserService } from '../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent implements OnInit {

  updatePhoneForm: FormGroup;
  isSeller: boolean = false;
  isBuyer: boolean = false;
  isUpdated: boolean = false;

  constructor(
    private builder: FormBuilder,
    private userService: UserService,
    private router: Router
    ) {
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
    this.updatePhoneForm = this.builder.group({
      phone: ['', Validators.required]

    })
  }

  updatePhone() {
    this.userService.updatePhone(this.updatePhoneForm.value.phone).subscribe(
      result => {
        console.log("Phone number updated.");
        this.isUpdated = true;
      },
      error => {
        console.log("Error updating phone.");
      },
      () => {
        if(this.isSeller) {
          setTimeout(function() {
            this.router.navigateByUrl('app-nav-seller');
          }, 5000);
        }

        if(this.isBuyer) {
          setTimeout(function() {
            this.router.navigateByUrl('app-nav-user');
          }, 5000);
        }
      }
    )
  }
}