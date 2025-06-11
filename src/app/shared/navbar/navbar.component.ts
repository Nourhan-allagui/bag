import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidebarVisible = false;

  showSidebar(): void {
    this.isSidebarVisible = true;
  }

  hideSidebar(): void {
    this.isSidebarVisible = false;
  }
}
