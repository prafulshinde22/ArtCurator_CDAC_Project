import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cart.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:8080/artcurator/api/cart';

  constructor(private http: HttpClient) { }

  // getCartItems(): Observable<CartItem[]> {
  //   //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
  //   return this.http.get<CartItem[]>(cartUrl).pipe(
  //     map((result: any[]) => {
  //       let cartItems: CartItem[] = [];

  //       for (let item of result) {
  //         let productExists = false

  //         for (let i in cartItems) {
  //           if (cartItems[i].productId === item.product.id) {
  //             cartItems[i].qty++
  //             productExists = true
  //             break;
  //           }
  //         }

  //         if (!productExists) {
  //           cartItems.push(new CartItem(item.id, item.product));
  //         }
  //       }

  //       return cartItems;
  //     })
  //   );
  // }

  addProductToCart(product_id: number) {
    console.log("in service sending product id to cart table : " + product_id);
    console.log("in service sendinguser id to cart table : " + localStorage.user_id);
    //http://localhost:8080/artcurator/api/cart/addtocart?product_id=4&user_id=3
    return this.http.post(this.baseUrl + '/addtocart?product_id=' + product_id + '&user_id=' + localStorage.user_id,null, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  getAllCartItem() {
    return this.http.get<Cart[]>(this.baseUrl + '/' + localStorage.user_id, {
      headers: {
        'Authorization': "bearer " + localStorage.getItem("jwt")
      }
    });
  }

  deleteItem(id:number){
    return this.http.delete(this.baseUrl+'/deletefromcart?cart_id='+id+'&user_id='+localStorage.user_id,{ headers:{
        'Authorization' : "bearer " + localStorage.getItem("jwt")
      }});
  }
}
