import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductDto } from '../../../models/product-dto.model';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  getProductsByName(searchQuery: string) {
    this.productService.getProductsByName(searchQuery).subscribe(
      response => {
        if(response != null) {
          this.productList = response;
        }
      }
    );
  }

  productList:Product[]=[];
  //productDto:ProductDto[]=[];
  //currImage:any;
  constructor(private router:Router,public productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts()
    .subscribe((data:Product[])=>{
      this.productList=data;
      this.getAllImages();
    });
  };

  getAllCartItem() {
    this.router.navigateByUrl('/mycart');
  }

  getAllImages(){
    for(let i=0;i<this.productList.length;i++){
      this.productList[i].image=`data:${this.productList[i].image_type};base64,${this.productList[i].image}`;
    };
  }

  // getAllImages(){
  //   for(let i=0;i<this.productList.length;i++){
  //     this.currImage=`data:${this.productList[i].image_type};base64,${this.productList[i].image}`;
  //     this.productDto.push(new ProductDto(this.productList[i].id,this.productList[i].name,this.productList[i].price,this.productList[i].description,this.productList[i].category,this.currImage));
  //   };
  // }
  
  addToWallet(){
    this.router.navigateByUrl('/bwallet');
  }

} 
