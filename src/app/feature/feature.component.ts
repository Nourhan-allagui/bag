import { Component } from '@angular/core';

export interface FeactureElement {
  id: number;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  result: number;
}

const ELEMENT_DATA: FeactureElement[] = [
  {
    id: 1,
    name: 'Classic Tote',
    price: 49.99,
    images: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg'],
    quantity: 1,
    result: 49.99
  },
  {
    id: 2,
    name: 'Urban Backpack',
    price: 59.99,
    images: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
    quantity: 1,
    result: 59.99
  }
];


@Component({
  selector: 'app-feature',
  standalone: false,
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  total: number = 0;
  displayedColumns: string[] = ['images', 'name', 'price', 'quantity', 'result'];
  displayedFacture: string[] = ['name', 'quantity', 'result'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<FeactureElement>();
  incrementNumber(index: number) {
    this.dataSource[index].quantity += 1;
    this.featureResult(index);
  }

  decrementNumber(index: number) {
    if (this.dataSource[index].quantity > 0) {
      this.dataSource[index].quantity -= 1;
      this.featureResult(index);
    }
  }

  featureResult(index: number) {
    const item = this.dataSource[index];
    item.result = item.price * item.quantity;
  }

  getTotal(): number {
    return this.dataSource.reduce((total, item) => total + item.result, 0);
  }
}
