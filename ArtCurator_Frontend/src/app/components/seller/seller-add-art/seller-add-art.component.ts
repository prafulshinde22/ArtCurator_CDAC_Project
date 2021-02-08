import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../../../models/add-product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
@Component({
  selector: 'app-seller-add-art',
  templateUrl: './seller-add-art.component.html',
  styleUrls: ['./seller-add-art.component.css']
})
export class SellerAddArtComponent implements OnInit {
  productAdded:boolean=null;
  addProduct:AddProduct=new AddProduct();
  image ! : File;
  message:string="";
  constructor(private router:Router,private productService:ProductService) {}

  ngOnInit(): void {
  }
  
  onFileChanged(event:any) {
    console.log(event);
    this.image = event.target.files[0];
  }

  //event handler function called when Upload btn is clicked
  onUpload() {
    console.log("Product data : "+this.addProduct.category);
    this.productService.uploadFile(this.image,this.addProduct).subscribe(
      response => {
        console.log(response);
        
      },
      error=>{
        this.productAdded=true;
        setTimeout(()=>{
          this.router.navigateByUrl('/sellerhome');
        },3000);
      }
    );
  }
  backToHome(){
    this.router.navigateByUrl('/admin');
  }

}

