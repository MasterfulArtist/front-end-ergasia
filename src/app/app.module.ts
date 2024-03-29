import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from "@angular/material/card";
import { ProductListComponent } from './product-list/product-list/product-list.component';
import { ProductCreateComponent } from './product-list/product-create/product-create.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { AccountListComponent } from './account-list/account-list.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { RegionListComponent } from './region-management/region-list/region-list.component';
import { RequestForApprovalListComponent } from './request-for-approval-list/request-for-approval-list.component';
import { RequestForApprovalCreateComponent } from './request-for-approval-create/request-for-approval-create.component';
import {httpInterceptorProviders} from "./shared/http.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProductListComponent,
    ProductCreateComponent,
    AccountListComponent,
    AccountCreateComponent,
    RegionListComponent,
    RequestForApprovalListComponent,
    RequestForApprovalCreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
