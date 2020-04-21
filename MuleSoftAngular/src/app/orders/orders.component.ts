import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import {Order} from '../models/order.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders:Order[];
  Request(){
    this.orderService.GetOrders().subscribe(response=>{
      this.orders=response.result;
    });
  }

  DeleteOrder(order){
    this.orderService.DeleteOrder(order).subscribe(response=>{
      let index=this.orders.indexOf(order);
      this.orders.splice(index,1)});
    
  }

  constructor(private orderService: OrdersService) {
    this.Request();
    
    
  }

  ngOnInit(): void {
  }

}
