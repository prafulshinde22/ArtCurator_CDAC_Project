import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.css']
})
export class GetOrdersComponent implements OnInit {
orders:Order[]=[];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(response=>{
      this.orders=response;
      setTimeout(() => {
        console.log("Order : "+response[0].timestamp);
      }, 2000);
      
    });
  }

}
