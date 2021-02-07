import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.css']
})

export class ChangeAddressComponent implements OnInit {
  changeAddressForm: FormGroup;
  isSeller: boolean = false;
  isBuyer: boolean = false;
  isUpdated: boolean = false;

  constructor(private builder: FormBuilder,
    private addressService: AddressService,
    private router: Router) {
    if (window.localStorage.user_role === "SELLER") {
      this.isSeller = true;
    }

    if (window.localStorage.user_role === "BUYER") {
      this.isBuyer = true;
    }
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.changeAddressForm = this.builder.group({
      apartment: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pin: ['', Validators.required]
    })
  }

  changeAddress() {
    console.log(this.changeAddressForm.value);
    this.addressService.changeAddress(this.changeAddressForm.value).subscribe(
      response => {
        console.log("Address updated.");
        this.isUpdated = true;
      },
      error => {
        console.log("Address updation unsuccessful.");
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