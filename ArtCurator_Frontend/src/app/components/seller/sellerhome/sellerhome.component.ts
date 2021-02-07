import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import { Router } from '@angular/router';
import {ProductService} from '../../../services/product.service'
@Component({
  selector: 'app-sellerhome',
  templateUrl: './sellerhome.component.html',
  styleUrls: ['./sellerhome.component.css']
})
export class SellerhomeComponent implements OnInit {
  prod:Product[]=[];
  retrivedImage:any[]=[];
  constructor(private router:Router,public productService:ProductService) { 
    window.localStorage.removeItem("ArtId");
    window.localStorage.removeItem("ArtName");
  }
  
  ngOnInit(): void {
    this.productService.getProductsById()
    .subscribe((data:Product[])=>{
      if(data!=null){
        this.prod=data;
        this.getCartImg();
      }
    });
  };

  getCartImg(){
    for(let i=0;i<this.prod.length;i++){
      this.prod[i].image=`data:image/jpeg;base64,${this.prod[i].image}`;
    };
  }
  addToWallet(){
    this.router.navigateByUrl('/awallet');
  }

  deleteItem(id:number,name:string){
    window.localStorage.ArtId=id;
    window.localStorage.ArtName=name;
    this.router.navigateByUrl('/removeart');
  }
}  

