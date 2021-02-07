import { Component} from '@angular/core';
import {ProductService} from '../../../services/product.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-remove-art',
  templateUrl: './seller-remove-art.component.html',
  styleUrls: ['./seller-remove-art.component.css']
})
export class SellerRemoveArtComponent {
  id:any=window.localStorage.getItem("ArtId");
  name:any=window.localStorage.getItem("ArtName");
  productDeleted:boolean=null;

  constructor(private router:Router,private productService:ProductService) { }
  deleteProd(){
    this.productDeleted=true;
    this.productService.deleteProduct(this.id)
    .subscribe();
    window.localStorage.removeItem("ArtId");
    window.localStorage.removeItem("ArtName");
    setTimeout(()=>{
      this.router.navigateByUrl('/sellerhome');
    },15000);
  };

}
