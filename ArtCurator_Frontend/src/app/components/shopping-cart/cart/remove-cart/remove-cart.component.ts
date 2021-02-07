import { Component} from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-remove-cart',
  templateUrl: './remove-cart.component.html',
  styleUrls: ['./remove-cart.component.css']
})
export class RemoveCartComponent {
  id:any=window.localStorage.getItem("CartId");
  name:any=window.localStorage.getItem("CartArtName");
  cartItemDeleted:boolean=null;
  constructor(private router:Router,private cartService:CartService) { }

  deleteitem(){
    this.cartService.deleteItem(this.id)
    .subscribe();
    this.cartItemDeleted=true;
    window.localStorage.removeItem("CartId");
    window.localStorage.removeItem("CartArtName");
    setTimeout(()=>{
      this.router.navigateByUrl('/buyerhome');
    },1000);
  };

}
