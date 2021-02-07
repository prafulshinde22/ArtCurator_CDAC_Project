import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WalletService } from 'src/app/services/wallet.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {
 addmoneyForm: FormGroup;
 moneyAddedSuccess:boolean=null;
  constructor(private router: Router,private builder : FormBuilder,private walletService:WalletService) { }


  ngOnInit() {
    this.buildForm()
  }
  buildForm(){
    this.addmoneyForm=this.builder.group({
      money:['',Validators.required],
      month:['',Validators.required],
      year:['',Validators.required],
      cnumber:['',Validators.required],
      cvv:['',Validators.required],
      name:['',Validators.required]
    })
  }

  updateWallet(){
    console.log("In update buyer wallet component : "+this.addmoneyForm.get('money').value);
    this.walletService.addToWallet(this.addmoneyForm.get('money').value).subscribe();
    this.moneyAddedSuccess=true;
        setTimeout(()=>{
          this.router.navigateByUrl('/bwallet');
        },5000);
  };
}

