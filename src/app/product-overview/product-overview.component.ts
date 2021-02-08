import { Component, OnInit } from '@angular/core';
import { ProductConfiguratorService } from '../product-configurator.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.sass']
})
export class ProductOverviewComponent implements OnInit {

  productTitle: string;
  productTag: string;
  productQuote: string;
  productPrice: number;
  productPriceLabel: string;
  productPriceCurrency: string;

  productTabs: {
    tabTitle: string,
    tabContent: string
  }[]
  activeTab: number = 0;
  productOptions: {};

  constructor(private configurator: ProductConfiguratorService) { }

  ngOnInit(): void {
    this.productTag = 'New Release';
    this.productTitle = 'MOMENTUM True Wireless 2';
    this.productQuote = 'Earbuds that put sound first';
    this.productPriceLabel = 'Starting at';
    this.productPrice = 295.95;
    this.productPriceCurrency = '$';

    this.productTabs = [{
      tabTitle: 'Overview',
      tabContent: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'
    },{
      tabTitle: 'Features',
      tabContent: 'features'
    },{
      tabTitle: "What's in the box?",
      tabContent: 'the box'
    }]

    this.productOptions = this.configurator.getOptions();

    this.configurator.calculateFinalPrice();
  }

  selectTab(index) {
    this.activeTab = index;
  }

}
