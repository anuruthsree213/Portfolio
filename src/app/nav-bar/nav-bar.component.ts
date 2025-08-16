import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isMenuOpen = false;

  toggleMenu() { this.isMenuOpen = !this.isMenuOpen; }
  closeMenu() { this.isMenuOpen = false; }

}
