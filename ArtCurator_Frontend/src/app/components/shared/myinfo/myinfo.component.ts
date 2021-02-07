import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Address } from 'src/app/models/address.model';
import { UserService } from 'src/app/services/user.service';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})

export class MyinfoComponent implements OnInit {
  user: User = new User();
  address: Address[] = [];
  isSeller: boolean = false;
  isBuyer: boolean = false;

  constructor(private router: Router, private userService: UserService, private addressService: AddressService) {
    if (window.localStorage.user_role === "SELLER") {
      this.isSeller = true;
    }

    if (window.localStorage.user_role === "BUYER") {
      this.isBuyer = true;
    }
  }

  ngOnInit(): void {
    this.userService.getUserById().subscribe(response => {
      this.user = response;
    });
    this.getAdd();
  }
  getAdd() {
    this.addressService.getUserAddresses().subscribe(response => {
      this.address = response;
    });
  }
}