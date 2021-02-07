import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product.model';
import { Router } from '@angular/router';
import {ProductService} from '../../../services/product.service'
@Component({
  selector: 'app-unsold-arts',
  templateUrl: './unsold-arts.component.html',
  styleUrls: ['./unsold-arts.component.css']
})
export class UnsoldArtsComponent implements OnInit {
  prod:Product[]=[];
  retrivedImage:any[]=[];
  constructor(private router:Router,public productService:ProductService) { 
    console.log("Prod length : "+this.prod.length);
    window.localStorage.removeItem("ArtId");
    window.localStorage.removeItem("ArtName");
  }
  
  ngOnInit(): void {
    this.productService.getAllUnSoldProducts()
    .subscribe((data:Product[])=>{
      if(data!=null){
        this.prod=data;
        this.getCartImg();
      }
    });
  };
  getCartImg(){
    for(let i=0;i<this.prod.length;i++){
      this.prod[i].image=`data:${this.prod[i].image_type};base64,${this.prod[i].image}`;
    };
  }
}
