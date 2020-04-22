import { Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private apiClientService:ApiClientService
  ) { }

  GetOrders():Observable<any>{ 
    
    return this.apiClientService.get('http://localhost:8081/api/orders/getOrder');
  
  }

  PostOrder(body):Observable<any>{

    return this.apiClientService.post('http://localhost:8081/api/orders/postOrder',body);

  }

  DeleteOrder(order):Observable<any>{

    return this.apiClientService.delete('http://localhost:8081/api/orders/deleteOrder?ordercode='+order.OrderCode);

  }

}
