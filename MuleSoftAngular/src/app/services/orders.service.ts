import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  GetOrders(){ 
    
    return this.http.get('http://localhost:8081/api/orders/getOrder');
  
  }

  DeleteOrder(order){
    return this.http.delete('http://localhost:8081/api/orders/deleteOrder?ordercode='+order.OrderCode);
  }

}
