import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/artcurator/api/order';

  constructor(private router: Router, private http: HttpClient) { }

  placeOrder(){
    return this.http.post<string>(this.baseUrl + '/add/'+localStorage.user_id,null, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
    // window.alert("Hello..Your order is placed.\nYour order will be delivered in 10 working days.")
    // this.router.navigateByUrl('/buyerhome');
  } 
  getUserOrders() {
    return this.http.get<Order[]>(this.baseUrl + '/orders/' + localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }
}

