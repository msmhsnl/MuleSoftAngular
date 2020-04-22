import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import {Order} from '../models/order.model';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders:Order[];

  GetOrders(){

    this.orderService.GetOrders().subscribe(response=>{
      if(response.isSucceeded){
        this.orders=response.result.sort((x,y) => x.OrderCode > y.OrderCode ? 1 : -1);
      }else{
        alert(response.message);
      }
    });
  }

  DeleteOrder(order){

    this.orderService.DeleteOrder(order).subscribe(response=>{
      
      if(response.isSucceeded){
        let index=this.orders.indexOf(order);
        this.orders.splice(index,1);
        alert(response.message);
      }else{
        alert(response.message);
      }
    });
  }

  constructor(
    private orderService: OrdersService,
    private dataService:DataService) {
      this.GetOrders();
  }

  ngOnInit(): void {}

}
