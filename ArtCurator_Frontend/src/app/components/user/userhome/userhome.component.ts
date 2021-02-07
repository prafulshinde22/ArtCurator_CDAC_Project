import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  productList:Product[]=[];
  searchQuery: string = "";

  constructor(private router:Router,public productService:ProductService) { 
    window.localStorage.removeItem('total_amount');
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe((data:Product[])=>{
      this.productList=data;
    });
  };

  getAllCartItem() {
    this.router.navigateByUrl('/mycart');
  }

  addToWallet(){
    this.router.navigateByUrl('/bwallet');
  }

  fetchProductsByName() {
    this.productService.getProductsByName(this.searchQuery).subscribe(
      response => {
        if(response != null) {
          this.productList = response;
        }
      }
    );
  }
}

