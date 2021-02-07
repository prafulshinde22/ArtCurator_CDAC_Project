import { Component, OnInit } from '@angular/core';
import {CartService} from 'src/app/services/cart.service';
import {Cart} from 'src/app/models/cart.model';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';
@Component({
  selector: 'app-get-cart',
  templateUrl: './get-cart.component.html',
  styleUrls: ['./get-cart.component.css']
})
export class GetCartComponent implements OnInit {
  cartList:Cart[]=[];
  message:string="";
  imgArray:any[]=[];
  currImage:any;
  walletAmount:number=0;
  lessWalletAmount:boolean=null;
  
  totalAmount:number=0;
  constructor(private router:Router,private cartService:CartService,private walletService:WalletService) {
    window.localStorage.removeItem("CartId");
    window.localStorage.removeItem("CartArtName");
   }
  ngOnInit(): void {
    this.cartService.getAllCartItem()
    .subscribe(data=>{
      this.cartList=data;
      this.getCartImg();
      this.getTotalAmt();
    },
    error=>{
      this.message=error;
    }
    );
  };

  getCartImg(){
    for(let i=0;i<this.cartList.length;i++){
      this.cartList[i].image=`data:image/jpeg;base64,${this.cartList[i].image}`;
    };
  }

  getTotalAmt(){
    for(let i=0;i<this.cartList.length;i++){
      this.totalAmount+=this.cartList[i].amount;
    };
  }

  toCheckOut(){
   this.walletService.getWallet()
    .subscribe(data=>{
      this.walletAmount=data;
    });
    setTimeout(() => {
      console.log("In get cart wallet :"+this.walletAmount);
    console.log("In get cart total :"+this.totalAmount);
    if(this.walletAmount>this.totalAmount)
    {
      this.router.navigateByUrl('/order');
    }else{
      this.lessWalletAmount=true;
    }
    }, 1000);
    
  }

  deleteItem(id:number,name:string){
    window.localStorage.CartId=id;
    window.localStorage.CartArtName=name;
    this.router.navigateByUrl('/removefromcart');
  }
}
