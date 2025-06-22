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

        // 🔥 Pass cart to FeatureComponent if that's what got activated
        if ('selectedDetails' in componentRef) {
          componentRef.selectedDetails = data;
        }
      });
    }

    // Optional: cover case if FeatureComponent is routed directly (and not through ShopComponent)
    if ('selectedDetails' in componentRef && this.latestCartItem) {
      componentRef.selectedDetails = this.latestCartItem;
    }
  }
}
