import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

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
    const now = new Date();
    const formattedTime = now.toLocaleString();

    const itemsDetails = this.selectedDetails.map(item => {
      return `
      Name:          ${item.name}
      Price:         ${item.unitPrice} TND
      Color:         ${item.color || 'N/A'}
      Quantity:      ${item.quantity}
      --------------
      Result:        ${item.totalPrice} TND
`;
    }).join('\n\n');

    const emailData = {
      images: this.selectedDetails.map(item => item.images?.[0] || '').join(', '),
      fullName: this.userInfo.fullName,
      email: this.userInfo.email,
      address: this.userInfo.address,
      number: this.userInfo.number,
      time: formattedTime,
      message: itemsDetails
    };

    emailjs.send(
      'service_o8ihqzi',
      'template_y0kasqk',
      emailData,
      'fjJDxdCXP_lFjctFL'
    ).then(
      (result) => {
        console.log('Email sent!', result.text);
        alert('Order placed and email sent successfully!');
      },
      (error) => {
        console.error('Email failed...', error.text);
        alert('Failed to send order email.');
      }
    );
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
