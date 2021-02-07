import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  isSeller: boolean = false;
  isBuyer: boolean = false;

  constructor() {
    if (window.localStorage.user_role === "SELLER") {
      this.isSeller = true;
    }

    if (window.localStorage.user_role === "BUYER") {
      this.isBuyer = true;
    }
  }

  ngOnInit(): void {
  }

}
