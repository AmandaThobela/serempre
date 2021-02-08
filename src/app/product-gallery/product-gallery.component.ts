import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.sass']
})
export class ProductGalleryComponent implements OnInit {
  sliderImages: {
    url: string,
    fullImage: string,
    image: string
  }[];
  selectedImage: string;
  indexOfSelected: number;

  constructor() { }

  ngOnInit(): void {
    this.sliderImages = [{
      url: '/assets/images/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser-1.png',
      fullImage: '/assets/images/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser.png',
      image: '',
    },{
      url: '/assets/images/big-MOMENTUM-TRUEWIRELESS2.png',
      fullImage: '/assets/images/big-MOMENTUM-TRUEWIRELESS2@3x.png',
      image: ''
    }]

    this.changeImage(0);
  }

  changeImage(index) {
    this.indexOfSelected = index;
    this.selectedImage = this.sliderImages[index].fullImage;
  }

}
