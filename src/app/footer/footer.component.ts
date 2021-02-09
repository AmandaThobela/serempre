import { Component, OnInit } from '@angular/core';
import { ProductConfiguratorService } from '../product-configurator.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  private priceSubscription: Subscription;
  finalPrice: number

  constructor(private configurator: ProductConfiguratorService) { }

  ngOnInit(): void {
    this.priceSubscription = this.configurator.$price.subscribe((price: number) => {
      this.finalPrice = price
    })
  }
}
