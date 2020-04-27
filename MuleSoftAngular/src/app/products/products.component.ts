import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/product.model';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[];
  
  GetProducts(){

    this.productService.GetProducts().subscribe(response=>{
        
      if(response.isSucceeded){
        this.products=response.result.sort((x,y) => x.ProductCode > y.ProductCode ? 1 : -1);
      }else{
        alert(response.message);
      }
      
    });
    
  }
  
  productList=[];

  AddToCart(product){

    let exist=false;

    this.productList.forEach(element => {
      if(element==product){
        exist=true;
      }
    });

    if(exist){
      alert("Product Already Exist in Cart");
    }else{
      this.productList.push(product);
      localStorage.setItem("data",JSON.stringify(this.productList));
      alert("Product Added to Cart");
    }
  }

  constructor(
    private productService: ProductsService,
    private dataService:DataService
    ) {
      this.GetProducts();
      //localStorage.clear();
  }

  ngOnInit(): void {}

}
