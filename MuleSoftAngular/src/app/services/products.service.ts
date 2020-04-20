import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
  
  GetProducts(){ 
    
  return this.http.get('http://localhost:8081/api/products');

  }
 
}
