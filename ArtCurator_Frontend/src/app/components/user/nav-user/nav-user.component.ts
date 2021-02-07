import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { ProductListComponent } from '../../shopping-cart/product-list/product-list.component';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent implements OnInit {
  user:User=new User();
  searchQuery: string = "";
  productList: Product[] = [];

  constructor(private userService:UserService,private router:Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.userService.getUserById().subscribe(response=>{
      console.log("User :"+response.name);
      this.user=response;
    });
  }

  logout(){
    window.localStorage.clear();
    this.router.navigateByUrl('/logout');
  }
}
