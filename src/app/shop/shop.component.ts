import {Component, OnInit} from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  rangeValue = 0;
  rangePosition = '0%';
  selectedBag: any = null;
  currentImage: string = '';
  selecteBagsDependsGender: any = null;
  searchTerm: string = '';
  currentGenderFilter: string | null = null;
  filteredBags: any[] = [];
  pubImgBags = [
    'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:3000,ch:1687,q:80,w:3000/z37mwDVckwJURH4Ho5KRYW.jpeg',
    'https://www.kalkstore.com/cdn/shop/articles/KL_WEB_BLOG_PORTADA_4420x2400_df689793-0c08-4d64-8872-7b415597a5ac.jpg?v=1654701916&width=1500',
    'https://hips.hearstapps.com/ell.h-cdn.co/assets/16/04/980x490/landscape-1453910197-elle-handbags-index.jpg?resize=1200:*',
  ];
  genderType = [
    {
      id: 1,
      images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMW7VwE4hiA-F3dZpmafUui0jh92KU-u-VrQ&s',
      name: "Women",
      description: "Discover our high-quality, stunning women's bag—perfect for this season",
      buttons: "SHOP NOW"
    },
    {
      id: 2,
      images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvF_zdxA4pfdsSgIF9BiqtIcqIx0XJLS8xw&s',
      name: "Men",
      description: "Discover our high-quality, stunning women's bag—perfect for this season",
      buttons: "SHOP NOW"
    },
    {
      id: 3,
      images: 'https://www.humanium.org/fr/wp-content/uploads/2025/05/shutterstock_2267902633-scaled.jpg',
      name: "Children",
      description: "Discover our high-quality, stunning women's bag—perfect for this season",
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
      gender: "Women"
    },
    {
      id: 2,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      photos: ['https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346','https://genietravel.com/cdn/shop/files/45DegreeAngle2_a8ae371a-570d-4adc-8d96-b2be68eeb941_1200x.jpg?v=1737023346'],
      gender: "Men"
    },
    {
      id: 3,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://static.oysho.net/6/static2/itxwebstandard/images/pespeciales/oysho/filtros092023/bolsos/bolsasDeportivas.jpg?t=20250604194005'],
      photos: [''],
      gender: "Women"
    },
    {
      id: 4,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://m.media-amazon.com/images/I/81BCwzfdf-L._AC_UY1000_.jpg'],
      photos: [''],
      gender: "Women"
    },
    {
      id: 5,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://d1q03ajwgi7cv2.cloudfront.net/media/catalog/category/REGENT-0022511120007487_Side.jpg'],
      photos: [''],
      gender: "Children"
    },
    {
      id: 6,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843'],
      photos: [''],
      gender: "Men"
    },
    {
      id: 7,
      name: 'Classic Tote',
      description: 'Stylish and spacious.',
      price: 49.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgYXfkC3rWXCDfYxzPoOd5rSm6nyGYCKzN9A&s'],
      photos: [''],
      gender: "Children"
    },
    {
      id: 8,
      name: 'Urban Backpack',
      description: 'Perfect for city commutes.',
      price: 59.99,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-AEzYrAFXuMBrDWxeOF3sJzyZSj5DLcSfeQ&s'],
      photos: [''],
      gender: "Men"
    }

  ];

  ngOnInit() {
    this.updatePosition();
  }

  constructor() {
    this.resetFilter();
  }

  onRangeChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.rangeValue = +input.value;
    this.updatePosition();
  }

  private updatePosition(): void {
    const min = 0;
    const max = 300;
    const newValue = ((this.rangeValue - min) * 100) / (max - min);
    const newPosition = 10 - (newValue * 0.2);
    this.rangePosition = `calc(${newValue}% + ${newPosition}px)`;
  }

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
    this.currentGenderFilter = gender;
    this.applyFilters();
  }

  resetFilter() {
    this.currentGenderFilter = null;
    this.searchTerm = '';
    this.filteredBags = [...this.bags];
  }

  clearSearch() {
    this.searchTerm = '';
    this.applyFilters();
  }

}
