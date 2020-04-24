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
  setDropdownView="display:none";
  ToggleView(i){
    let item=document.getElementById(i);
    if(item.getAttribute("style")==""){
      item.setAttribute("style","display:none");
    }else{
      item.setAttribute("style","");
    }
  }
  GetTotal(order){
    let total=0;
    order.Items.forEach(element => {
      total+=element.TotalAmount;
    });
    return total;
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
