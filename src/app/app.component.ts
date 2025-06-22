import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cartCount = 0;
  currentShopComponent: any;
  latestCartItem: any;

  onAddToCart(quantity: number) {
    this.cartCount += quantity;
  }
  onActivate(componentRef: any) {
    if (componentRef.addToCartEvent) {
      componentRef.addToCartEvent.subscribe((quantity: number) => {
        this.onAddToCart(quantity);
      });
    }
    this.currentShopComponent = componentRef;
    if (componentRef.addToCartDetails) {
      componentRef.addToCartDetails.subscribe((data: any) => {
        this.latestCartItem = data;
        console.log('Received from ShopComponent:', data);
      });
    }
    if (componentRef.cartDataEmitter) {
      componentRef.cartDataEmitter.subscribe((cartItem: any) => {
        this.latestCartItem = cartItem;
      });
    }
  }
}
