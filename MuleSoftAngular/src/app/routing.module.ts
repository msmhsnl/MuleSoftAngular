import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {OrdersComponent} from './orders/orders.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes=[
  {path:'products',component: ProductsComponent},
  {path:'orders',component: OrdersComponent},
  {path:'cart',component: CartComponent}
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule { }
