import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product'
import {Products} from '../shared/products'


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products:Product[] = Products;
   share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor() { }

  ngOnInit(): void {
  }
  

}
