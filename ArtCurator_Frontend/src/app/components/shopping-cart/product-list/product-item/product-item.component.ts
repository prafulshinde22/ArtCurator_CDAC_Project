import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product=new Product();
  constructor(private msg: MessengerService ,private cartService:CartService) { }

  ngOnInit() {
  }  

  handleAddToCart(id:number) {
    this.cartService.addProductToCart(id).subscribe(() => {
    this.msg.sendMsg(this.productItem);
    })
  }
}

