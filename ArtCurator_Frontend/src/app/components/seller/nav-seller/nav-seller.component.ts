import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-seller',
  templateUrl: './nav-seller.component.html',
  styleUrls: ['./nav-seller.component.css']
})
export class NavSellerComponent implements OnInit {
  user:User=new User();
  constructor(private userService:UserService,private router:Router) { }

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
