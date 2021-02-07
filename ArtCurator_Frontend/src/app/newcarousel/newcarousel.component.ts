import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newcarousel',
  templateUrl: './newcarousel.component.html',
  styleUrls: ['./newcarousel.component.css']
})
export class NewcarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
   }

  ngOnInit(): void {
  }

}
