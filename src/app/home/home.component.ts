import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  pubImgBags = [
      'https://static.wixstatic.com/media/02db29_90c3cf6e03ec43f79a03988c29609ab4~mv2.jpg/v1/fill/w_980,h_735,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9-min.jpg',
      'https://www.crepslocker.com/cdn/shop/products/Louis-Vuitton-Monogram-Mirror-Keepall-50-Crepslocker-Front-Side-2_112d7dcd-ae5b-41cc-92aa-6bf3373ce92f.jpg?v=1642169140',
      'https://cdn.shopify.com/s/files/1/0569/1224/8947/files/BS75A22E2_360-11.jpg?v=1725424086',
  ];
  genderType = [
    {
      id: 1,
      images: 'https://i.pinimg.com/736x/fa/84/c9/fa84c962084c1aff3cad810cd14097ac.jpg',
      name: "Women",
      description: "Spring Session",
      buttons: "SHOP NOW"
    },
    {
      id: 2,
      images: 'https://i.pinimg.com/474x/66/e9/40/66e940893b375d4b177af9040c062746.jpg',
      name: "Men",
      description: "Spring Session",
      buttons: "SHOP NOW"
    },
    {
      id: 3,
      images: 'https://media.istockphoto.com/id/842311786/photo/happy-small-girl.jpg?s=612x612&w=0&k=20&c=rDqbyesT0jcGAAe0SaJzuPMHT7QFaHLq8mLV92Xwhvg=',
      name: "Children",
      description: "Spring Session",
      buttons: "SHOP NOW"
    }
  ];
  bags = [
    {
      id: 1,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg'],
      photos: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg','https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg'],
      gender: "Women",
      quantity: 1,
      sizes: ['Small', 'Medium', 'Big'],
      colors: ['Red', 'Blue']
    },
    {
      id: 2,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      photos: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      gender: "Men",
      quantity: 1,
      sizes: ['Medium', 'Big'],
      colors: ['Green', 'Blue'],
    },
    {
      id: 3,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://static.oysho.net/6/static2/itxwebstandard/images/pespeciales/oysho/filtros092023/bolsos/bolsasDeportivas.jpg?t=20250604194005'],
      photos: [''],
      gender: "Women",
      quantity: 1,
      sizes: ['Medium'],
      colors: ['Yellow', 'Pink'],
    },
    {
      id: 4,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://m.media-amazon.com/images/I/81BCwzfdf-L._AC_UY1000_.jpg'],
      photos: [''],
      gender: "Women",
      quantity: 1,
      sizes: ['Big'],
      colors: ['Green', 'Blue'],
    },
    {
      id: 5,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/category/REGENT-0022511120007487_Side.jpg'],
      photos: [''],
      gender: "Children",
      quantity: 1,
      sizes: ['Medium', 'Big'],
    },
    {
      id: 6,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843'],
      photos: [''],
      gender: "Men",
      quantity: 1,
      sizes: ['Small', 'Medium', 'Big'],
      colors: ['Yellow', 'Pink'],
    },
    {
      id: 7,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYXfkC3rWXCDfYxzPoOd5rSm6nyGYCKzN9A&s'],
      photos: [''],
      gender: "Children",
      quantity: 1,
      sizes: ['Small', 'Big'],
      colors: ['Yellow', 'Pink'],
    },
    {
      id: 8,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AEzYrAFXuMBrDWxeOF3sJzyZSj5DLcSfeQ&s'],
      photos: [''],
      gender: "Men",
      quantity: 1,
      sizes: ['Small', 'Medium'],
      colors: ['Yellow'],
    }

  ];

  selectedBag: any = null;
  currentImage: string = '';
  selecteBagsDependsGender: any = null;
  searchTerm: string = '';
  currentGenderFilter: string | null = null;
  filteredBags: any[] = [];

  selectedSize: string = 'Small';
  selectedColor: string = 'color';
  activeGender: string = 'All';
  @Output() addToCartEvent = new EventEmitter<number>();
  @Output() addToCartDetails = new EventEmitter<any>();

  commandCart: any[] = [];
  get availableColorsForBag(): string[] {
    return this.selectedBag?.colors ?? [];
  }
  sizeSelect(dropOption: string): void {
    this.selectedSize = dropOption;
  }
  colorSelect(dropOption: string): void {
    this.selectedColor = dropOption;
  }

  constructor(private router: Router) {
    this.resetFilter();
  }

  get availableSizes(): string[] {
    if (this.selectedBag && this.selectedBag.sizes) {
      return this.selectedBag.sizes;
    }
    return ['Small', 'Medium', 'Big'];
  }
  openModal(bag: any) {
    this.selectedBag = bag;
    this.currentImage = bag.images[0];
    const modalEl = document.getElementById('bagModal');
    this.selectedSize = bag.sizes?.[0] || 'Small';
    this.selectedColor = bag.colors?.[0] || '';
    const modal = new bootstrap.Modal(modalEl!);
    modal.show();
  }

  changeImage(img: string) {
    this.currentImage = img;
  }


  applyFilters() {
    this.filteredBags = this.bags.filter(bag => {
      const genderMatch = !this.currentGenderFilter || bag.gender === this.currentGenderFilter;
      const searchMatch = !this.searchTerm || this.doesBagMatchSearch(bag, this.searchTerm);
      return genderMatch && searchMatch;
    });
  }

  private doesBagMatchSearch(bag: any, searchTerm: string): boolean {
    const searchLower = searchTerm.toLowerCase();
    const propertiesToSearch = Object.keys(bag).filter(
      key => key !== 'images' && key !== 'photos'
    );

    return propertiesToSearch.some(property => {
      const value = bag[property];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchLower);
      } else if (typeof value === 'number') {
        return value.toString().includes(searchTerm);
      }
      return false;
    });
  }

  filterByGender(gender: string) {
    this.activeGender = gender;
    this.currentGenderFilter = gender;
    this.applyFilters();
  }

  resetFilter() {
    this.currentGenderFilter = null;
    this.activeGender = 'All';
    this.searchTerm = '';
    this.filteredBags = [...this.bags];
  }

  clearSearch() {
    this.searchTerm = '';
    this.applyFilters();
  }
  incrementNumber() {
    this.selectedBag.quantity += 1;
  }

  decrementNumber() {
    if (this.selectedBag.quantity > 0) {
      this.selectedBag.quantity -= 1;
    }
  }
  goToShop() {
    this.router.navigate(['/shop']);
  }

  addToCart(): void {
    if (!this.selectedBag) return;
    const selectedDetails = {
      name: this.selectedBag.name,
      size: this.selectedSize,
      images: this.selectedBag.images,
      color: this.selectedColor,
      quantity: this.selectedBag.quantity,
      unitPrice: (this.selectedBag.price * 100) / 100,
      totalPrice: (this.selectedBag.price * this.selectedBag.quantity* 100) / 100
    };
    this.commandCart.push(selectedDetails);
    this.addToCartEvent.emit(1);
    this.addToCartDetails.emit(this.commandCart);

    this.selectedBag.quantity = 1;
  }
}
