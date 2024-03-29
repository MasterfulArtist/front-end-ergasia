import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductCreateComponent} from "./product-list/product-create/product-create.component";
import {ProductListComponent} from "./product-list/product-list/product-list.component";
import {HomeComponent} from "./home/home.component";
import {AccountListComponent} from "./account-list/account-list.component";
import {AccountCreateComponent} from "./account-create/account-create.component";
import {RequestForApprovalCreateComponent} from "./request-for-approval-create/request-for-approval-create.component";


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', redirectTo: 'login', pathMatch: 'full'},
  {path: 'product-list', component: ProductListComponent},
  {path: 'account-list', component: AccountListComponent},
  {path: 'account-create', component: AccountCreateComponent},
  {path: 'request-create', component: RequestForApprovalCreateComponent},
  {path: 'product-list/new-product', component: ProductCreateComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
