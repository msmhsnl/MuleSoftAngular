import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiClientService:ApiClientService) {}
  
  GetProducts():Observable<any>{ 
    
  return this.apiClientService.get('http://localhost:8081/api/products');

  }
 
}
