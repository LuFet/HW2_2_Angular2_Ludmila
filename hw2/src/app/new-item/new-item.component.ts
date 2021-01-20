import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { PRODUCTS } from '../productsList';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})

export class NewItemComponent implements OnInit {
  products: any;
  idValue: number = 0;
  nameValue: string = "name";
  priceValue: number = 0;
  categoryValue: number = 0;
  
  constructor() { }
  item = new Product();

  newProduct() {
    this.item.id=+this.idValue;
    this.item.name=this.nameValue;
    this.item.price = this.priceValue;
    this.item.category=this.categoryValue;
    console.log(this.item);
    this.products = PRODUCTS.push(this.item);

  }
  ngOnInit(): void {
  }
}
