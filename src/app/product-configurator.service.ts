import { Injectable } from '@angular/core';

import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductConfiguratorService {
  productPrice: number;
  configOptions: Array<Object>;

  private _priceSubj: BehaviorSubject<number> = new BehaviorSubject(0);

  $price = this._priceSubj.asObservable();

  constructor() {
    this.configOptions = [
      {
        label: "Choose your finish.",
        layout: 'horizontal',
        options: [
          {
            title: "Ivory White",
            desc: "For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. ",
            selected: true
          },
          {
            title: "Matte Black",
            desc: "Of all of the celestial bodies that capture our attention and fascination as astronomers.",
            selected: false
          }
        ]
      },{
        label: "Would you like to add extended warranty coverage?.",
        layout: 'vertical',
        options: [
          {
            title: "2 years coverage",
            desc: "For the past 75 years, Sennheiser has put sound first.",
            selected: true
          },
          {
            title: "3 years coverage",
            desc: "For the past 75 years, Sennheiser has put sound first.",
            selected: false,
            addedCost: 75
          }
        ]
      },{
        label: "Features.",
        layout: 'vertical',
        options: [
          {
            title: "Voice Assistant support",
            selected: true
          },
          {
            title: "Customizable controls",
            selected: false,
            addedCost: 25
          }
        ]
      }
    ]
  }

  getOptions() {
    return this.configOptions;
  }

  selectOption(option, category) {
    for (let opt in this.configOptions[category]["options"]) {
      this.configOptions[category]["options"][opt].selected = false;
    }

    this.configOptions[category]["options"][option]["selected"] = true;
  }

  setPrice(initialPrice) {
    this.productPrice = initialPrice;
    this._priceSubj.next(initialPrice);
  }

  calculateFinalPrice() {
    let addedCost = 0;
    for(let category in this.configOptions) {
      for(let option of this.configOptions[category]["options"]) {
        if(option.addedCost && option.selected) {
          addedCost += option.addedCost
        }
      }
    }

    this._priceSubj.next(this.productPrice + addedCost);
  }
}
