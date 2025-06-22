import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidebarVisible = false;
  @Input() selectedDetails: any;

  showSidebar(): void {
    this.isSidebarVisible = true;
  }

  hideSidebar(): void {
    this.isSidebarVisible = false;
  }
  removeCartItem(index: number): void {
    this.selectedDetails.splice(index, 1);
  }
  get cartCount(): number {
    return this.selectedDetails?.length || 0;
  }
}
