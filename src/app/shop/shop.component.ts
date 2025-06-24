import {AfterViewInit, Component, EventEmitter, Inject, OnInit, Output, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
declare var bootstrap: any;

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit, AfterViewInit {
  rangeValue = 0;
  rangePosition = '0%';
  selectedBag: any = null;
  currentImage: string = '';
  searchTerm: string = '';
  currentGenderFilter: string | null = null;
  filteredBags: any[] = [];
  toastElement: any;
  inStockOnly: boolean = true;
  selectedColors: string[] = [];
  selectedCategories: string[] = [];
  activeGender: string = 'All';
  cart: any[] = [];
  displayLimit: number = 6;
  @Output() addToCartEvent = new EventEmitter<number>();
  @Output() addToCartDetails = new EventEmitter<any>();

  commandCart: any[] = [];

  bags = [
    {
      id: 1,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg'],
      photos: [
        'https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg',
        'https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'
      ],
      gender: 'Women',
      quantity: 1,
      color: 'Black',
      category: 'Handbags',
      availability: true,
      result: 49.99
    },
    {
      id: 2,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      photos: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      gender: 'Men',
      quantity: 1,
      color: 'Grey',
      category: 'Backpacks',
      availability: true,
      result: 59.99
    },
    {
      id: 3,
      name: 'Travel Briefcase',
      description: 'Slim and efficient for work.',
      price: 69.99,
      images: ['https://static.oysho.net/6/static2/itxwebstandard/images/pespeciales/oysho/filtros092023/bolsos/bolsasDeportivas.jpg?t=20250604194005'],
      photos: [''],
      gender: 'Women',
      quantity: 1,
      color: 'Blue',
      category: 'Briefcases',
      availability: true,
      result: 69.99
    },
    {
      id: 4,
      name: 'Bucket Bag Mini',
      description: 'Trendy and casual.',
      price: 45.99,
      images: ['https://m.media-amazon.com/images/I/81BCwzfdf-L._AC_UY1000_.jpg'],
      photos: [''],
      gender: 'Women',
      quantity: 1,
      color: 'Brown',
      category: 'Bucket Bags',
      availability: true,
      result: 45.99
    },
    {
      id: 5,
      name: 'Pink Charm Bag',
      description: 'Decorative and cute.',
      price: 35.99,
      images: ['https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/category/REGENT-0022511120007487_Side.jpg'],
      photos: [''],
      gender: 'Children',
      quantity: 0,
      color: 'Pink',
      category: 'Charms & Pendants',
      availability: false,
      result: 35.99
    },
    {
      id: 6,
      name: 'Elegant Clutch',
      description: 'Perfect for events.',
      price: 39.99,
      images: ['https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843'],
      photos: [''],
      gender: 'Women',
      quantity: 2,
      color: 'Black',
      category: 'Clutch Bags',
      availability: true,
      result: 39.99
    },
    {
      id: 7,
      name: 'Cross Body Chic',
      description: 'Light and easy to carry.',
      price: 42.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYXfkC3rWXCDfYxzPoOd5rSm6nyGYCKzN9A&s'],
      photos: [''],
      gender: 'Children',
      quantity: 0,
      color: 'Yellow',
      category: 'Cross Body Bags',
      availability: false,
      result: 49.99
    },
    {
      id: 8,
      name: 'Eco Apparel Bag',
      description: 'Sustainable design.',
      price: 51.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AEzYrAFXuMBrDWxeOF3sJzyZSj5DLcSfeQ&s'],
      photos: [''],
      gender: 'Men',
      quantity: 1,
      color: 'Green',
      category: 'Apparel & Accessories',
      availability: true,
      result: 51.99
    },
    {
      id: 9,
      name: 'Classic Wallet',
      description: 'Compact and secure.',
      price: 29.99,
      images: ['https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg'],
      photos: [''],
      gender: 'Men',
      quantity: 1,
      color: 'Dark Brown',
      category: 'Wallets',
      availability: true,
      result: 29.99
    }
  ];
  categoryOptions: string[] = [
    'Apparel & Accessories',
    'Backpacks',
    'Briefcases',
    'Bucket Bags',
    'Charms & Pendants',
    'Clutch Bags',
    'Cross Body Bags',
    'Handbags',
    'Wallets'
  ];


  selectedSize: string = 'Choose an option';
  selectedColor: string = 'Choose an option';

  ngOnInit() {
    this.updatePosition();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }

  closeCollapse() {
    if (isPlatformBrowser(this.platformId)) {
      const collapseEl = document.getElementById('collapseExample2');
      if (collapseEl) {
        const collapseInstance = bootstrap.Collapse.getInstance(collapseEl);
        if (collapseInstance) {
          collapseInstance.hide();
        }
      }
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.resetFilter();
  }

  onRangeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.rangeValue = +input.value;
    this.updatePosition();
    this.applyFilters();
  }

  private updatePosition(): void {
    const min = 0;
    const max = 300;
    const newValue = ((this.rangeValue - min) * 100) / (max - min);
    const newPosition = 10 - (newValue * 0.2);
    this.rangePosition = `calc(${newValue}% + ${newPosition}px)`;
  }

  openModal(bag: any): void {
    this.selectedBag = {
      ...bag,
      photos: bag.photos.filter((photo: string) => !!photo)
    };
    this.currentImage = bag.images[0];

    if (isPlatformBrowser(this.platformId)) {
      const modalEl = document.getElementById('bagModal');
      if (modalEl) {
        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      }
    }
  }


  changeImage(img: string) {
    if (img) {
      this.currentImage = img;
    }
  }


  applyFilters() {
    this.filteredBags = this.bags.filter(bag => {
      const genderMatch = !this.currentGenderFilter ||
        bag.gender.toLowerCase() === this.currentGenderFilter.toLowerCase();

      const searchMatch = !this.searchTerm || this.doesBagMatchSearch(bag, this.searchTerm);

      const availabilityMatch = !this.inStockOnly || bag.availability === true;

      const colorMatch = this.selectedColors.length === 0 || this.selectedColors.includes(bag.color);

      const categoryMatch = this.selectedCategories.length === 0 || this.selectedCategories.includes(bag.category);

      const priceMatch = this.rangeValue === 0 || bag.price <= this.rangeValue;

      return genderMatch && searchMatch && availabilityMatch && colorMatch && categoryMatch && priceMatch;
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

  sortBags(criteria: string): void {
    switch (criteria) {
      case 'az':
        this.filteredBags.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        this.filteredBags.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'priceLowHigh':
        this.filteredBags.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighLow':
        this.filteredBags.sort((a, b) => b.price - a.price);
        break;
      case 'default':
        this.filteredBags = [...this.bags];
        break;
      case 'bestSelling':
        alert('Best selling logic not implemented.');
        break;
    }
  }

  onColorChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value;

    if (checkbox.checked) {
      this.selectedColors.push(value);
    } else {
      this.selectedColors = this.selectedColors.filter(c => c !== value);
    }

    this.applyFilters();
  }

  onCategoryChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = checkbox.value.trim();

    if (checkbox.checked) {
      this.selectedCategories.push(value);
    } else {
      this.selectedCategories = this.selectedCategories.filter(cat => cat !== value);
    }

    this.applyFilters();
  }
  loadMore(): void {
    this.displayLimit += 3;
  }

  sizeSelect(option: string): void {
    this.selectedSize = option;
  }

  colorSelect(option: string): void {
    this.selectedColor = option;
  }

  incrementNumber(): void {
    if (this.selectedBag) {
      this.selectedBag.quantity++;
    }
  }

  decrementNumber(): void {
    if (this.selectedBag && this.selectedBag.quantity > 1) {
      this.selectedBag.quantity--;
    }
  }

  addToCart(): void {
    if (!this.selectedBag) return;
    const selectedDetails = {
      name: this.selectedBag.name,
      size: this.selectedSize,
      images: this.selectedBag.images,
      color: this.selectedColor,
      quantity: this.selectedBag.quantity,
      unitPrice: this.selectedBag.price,
      totalPrice: this.selectedBag.price * this.selectedBag.quantity
    };
    this.commandCart.push(selectedDetails);
    this.addToCartEvent.emit(1);
    this.addToCartDetails.emit(this.commandCart);
  }
}
