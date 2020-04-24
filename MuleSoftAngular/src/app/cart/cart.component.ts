import { Component, OnInit} from '@angular/core';

import {OrdersService} from '../services/orders.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  baseList=JSON.parse(localStorage.getItem("data"));
  orderList=JSON.parse(localStorage.getItem("data"));
  
  TemporaryListManagement(){
    for (let i = 0; i < this.baseList.length; i++) {
      this.orderList[i].Quantity=1;
    }
  }
 
  InputChange(i){
    let price=this.baseList[i].SellingPrice;
    
    let quantityInputVal=(<HTMLInputElement>document.getElementsByClassName("quantity")[i]).value;

    this.orderList[i].Quantity=parseInt(quantityInputVal);

    let quantity=this.orderList[i].Quantity;
    
    this.orderList[i].SellingPrice=price*quantity;
  }

  CreateOrder(){
    
    let orderCode=(<HTMLInputElement>document.getElementById("orderCode")).value;
    
    var postBody={
      OrderCode:parseInt(orderCode),
      Items:[]
    }
    this.orderList.forEach(element => {
      postBody.Items.push(
        {
          ProductCode:element.ProductCode,
          Quantity:element.Quantity,
          TotalAmount:element.SellingPrice
        }
      )
    });
    this.orderService.PostOrder(postBody).subscribe(response=>{
      if(response.isSucceeded){
        alert("Order Created");
      }else{
        alert(response.message);
      }
    });
  }

  constructor(
    private orderService: OrdersService
  ) {}
 
  ngOnInit(): void {
    this.TemporaryListManagement();
  }
 

}
