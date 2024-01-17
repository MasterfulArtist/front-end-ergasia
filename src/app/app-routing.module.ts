import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductCreateComponent} from "./product-list/product-create/product-create.component";
import {ProductListComponent} from "./product-list/product-list/product-list.component";


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', redirectTo: 'login', pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'product-list/new-product', component: ProductCreateComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
