import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../services/orders.service';
import {Order} from '../models/order.model';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderDialogComponent } from '../order-dialog/order-dialog.component';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
dialogResult;
/*
  openDialog(){
    let dialogRef = this.dialog.open(OrderDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult=result;
    });
    return this.dialogResult;
  }
*/

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
  //setDropdownView="display:none";
  ToggleView(i){
    let item=document.getElementById(i);
    if(item.getAttribute("style")!==""){
      item.setAttribute("style","");
      
    }else{
      item.setAttribute("style","display:none");
    }
    /*
    let res=this.openDialog();
    if(res=="delete"){

    }
    */
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
    private dataService:DataService,
    public dialog:MatDialog) {
      this.GetOrders();
  }

  ngOnInit(): void {}

}
