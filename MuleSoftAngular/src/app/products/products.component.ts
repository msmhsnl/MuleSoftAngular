import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/product.model';
import {ProductResponse} from '../models/product.response.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  Request(){
    this.productService.GetProducts().subscribe(response=>{console.log(response);});
  }

  constructor(private productService: ProductsService) {
   this.Request();
  }

  ngOnInit(): void {
  }

}
