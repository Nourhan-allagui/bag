import { Component } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: false,
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  total: number = 0;
  displayedColumns: string[] = ['images', 'name', 'price', 'quantity', 'totalPrice'];
  displayedFacture: string[] = ['name', 'quantity', 'totalPrice'];
  selectedDetails: any[] = [];
  clickedRows = new Set<any>();
  userInfo = {
    fullName: '',
    email: '',
    address: '',
    number: ''
  };

  placeOrder(): void {
    const orderData = {
      customer: this.userInfo,
      items: this.selectedDetails,
      total: this.getTotal()
    };
    console.log('Order Submitted:', orderData);
  }
  removeCartItem(index: number): void {
    this.selectedDetails.splice(index, 1);
  }

  incrementNumber(index: number): void {
    const item = this.selectedDetails[index];
    if (item) {
      item.quantity += 1;
      this.updateResult(index);
    }
  }

  decrementNumber(index: number): void {
    const item = this.selectedDetails[index];
    if (item && item.quantity > 1) {  // Prevent quantity from going below 1
      item.quantity -= 1;
      this.updateResult(index);
    }
  }

  updateResult(index: number): void {
    const item = this.selectedDetails[index];
    if (item) {
      item.totalPrice = Math.round(item.unitPrice * item.quantity * 100) / 100;
    }
  }

  getTotal(): number {
    return Math.round(
      this.selectedDetails.reduce((total, item) => total + (item.totalPrice ?? 0), 0) * 100
    ) / 100;
  }
}
