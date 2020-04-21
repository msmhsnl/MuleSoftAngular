import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/product.model';
import {ProductResponse} from '../models/product.response.model';
import { DataService }     from '../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  
  public products:Product[];
  Request(){
    this.productService.GetProducts().subscribe(response=>{
      this.products=response[0].result;
    });
    
  }
  
  message:string;

  constructor(private productService: ProductsService) {
    

    this.Request();
   
  }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message=>this.message=message);
  
  }

}
