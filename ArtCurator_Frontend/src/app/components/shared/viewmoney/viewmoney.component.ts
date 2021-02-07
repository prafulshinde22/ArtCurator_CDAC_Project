import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-viewmoney',
  templateUrl: './viewmoney.component.html',
  styleUrls: ['./viewmoney.component.css']
})
export class ViewmoneyComponent implements OnInit {
  initialAmount:number=0;
  amount:number=0;
  message:string="";
  isBuyer: boolean = false;
  isSeller: boolean = false;

  constructor(private router:Router,private walletService:WalletService) {
    if (window.localStorage.user_role === "SELLER") {
      this.isSeller = true;
    }

    if (window.localStorage.user_role === "BUYER") {
      this.isBuyer = true;
    }
  }

  ngOnInit(): void {
    this.walletService.getWallet()
    .subscribe(data=>{
      this.initialAmount=data;
      console.log("In buyer wallet component Amount : "+this.initialAmount);
    });
  };

  updateWallet(){
    this.router.navigateByUrl('/addmoney');
  };

  backToHome(){
    if(this.isSeller) {
      this.router.navigateByUrl('/sellerhome');
    }

    if(this.isBuyer) {
      this.router.navigateByUrl('/buyerhome');
    }
  }
}