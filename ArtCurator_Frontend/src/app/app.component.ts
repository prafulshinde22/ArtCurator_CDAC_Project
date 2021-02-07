import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'ArtCurator';
  constructor(private router: Router) { }
  ngOnInit(): void {
    window.localStorage.clear();
    this.router.navigateByUrl('/home');
  };
}
