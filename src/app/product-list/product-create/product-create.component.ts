import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../../services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  productname: string='';
  productprice: number=0;

  constructor(private productService:ProductService,
              private matSnackBar:MatSnackBar,
              private router:Router){

  }

  addProduct(){

    this.productService.createProducts(this.productname,this.productprice).subscribe(
      response => {

        console.log(response);

        this.productname='';
        this.productprice=0;

        this.router.navigateByUrl('/product-list');

      },
      error=> {

        console.log(error);
        this.matSnackBar.open('Product could not be created',
          '',
          {duration:2000})

      }

    );



  }

  isDisabled():boolean{

    if(this.productname==='' || this.productprice===0){
      return true;
    }
    return false;

  }



}
