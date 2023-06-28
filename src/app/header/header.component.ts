import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title="header works!";
  navbarCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
