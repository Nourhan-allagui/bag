import { Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bags = [
    {
      id: 1,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg'],
      photos: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg','https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg']
    },
    {
      id: 2,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      photos: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346']
    },
    {
      id: 3,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://static.oysho.net/6/static2/itxwebstandard/images/pespeciales/oysho/filtros092023/bolsos/bolsasDeportivas.jpg?t=20250604194005'],
      photos: ['']
    },
    {
      id: 4,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://m.media-amazon.com/images/I/81BCwzfdf-L._AC_UY1000_.jpg'],
      photos: ['']
    },
    {
      id: 5,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/category/REGENT-0022511120007487_Side.jpg'],
      photos: ['']
    },
    {
      id: 6,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843'],
      photos: ['']
    },
    {
      id: 7,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYXfkC3rWXCDfYxzPoOd5rSm6nyGYCKzN9A&s'],
      photos: ['']
    },
    {
      id: 8,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AEzYrAFXuMBrDWxeOF3sJzyZSj5DLcSfeQ&s'],
      photos: ['']
    }

  ];

  selectedBag: any = null;
  currentImage: string = '';

  openModal(bag: any) {
    this.selectedBag = bag;
    this.currentImage = bag.images[0];
    const modalEl = document.getElementById('bagModal');
    const modal = new bootstrap.Modal(modalEl!);
    modal.show();
  }

  changeImage(img: string) {
    this.currentImage = img;
  }
}
