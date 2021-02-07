import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { AddressService } from 'src/app/services/address.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Address } from 'src/app/models/address.model';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  ordered: string = "";
  user: User = new User();
  address: Address[] = [];
  orderPlaced: boolean = false;

  constructor(private router: Router, private orderService: OrderService, private userService: UserService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.userService.getUserById().subscribe(response => {
      console.log("User :" + response.name);
      this.user = response;
    });
    this.getAdd();
  }
  getAdd() {
    this.addressService.getUserAddresses().subscribe(response => {
      console.log("Address :" + response[0].apartment);
      this.address = response;
    });
  }
  placeOrder() {
    this.orderService.placeOrder().subscribe(
      response => { },
      error => { }
    );

    this.orderPlaced = true;
    setTimeout(() => {
      this.router.navigateByUrl('/buyerhome');
    }, 5000);
  }
}