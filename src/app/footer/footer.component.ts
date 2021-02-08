import { Component, OnInit } from '@angular/core';
import { ProductConfiguratorService } from '../product-configurator.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  finalPrice: number

  constructor(private configurator: ProductConfiguratorService) { }

  ngOnInit(): void {
    this.finalPrice = this.configurator.calculateFinalPrice();
  }
}
