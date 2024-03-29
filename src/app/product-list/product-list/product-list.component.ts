import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products=new MatTableDataSource<any>();
  displayedcolumns:string[]= ['Id','Name','Price','DeleteButton'];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(

      response => {

        console.log(response);
        this.products = new MatTableDataSource<any>(response);

      },
      error=> {

        console.log(error);

      }

    );

  }


  deleteProduct(id:number) {

    this.productService.deleteProduct(id).subscribe(

      response => {

        console.log(response);
        this.productService.getProducts().subscribe(

          response => {

            console.log(response);
            this.products = new MatTableDataSource<any>(response);

          },
          error=> {

            console.log(error);

          }

        );

      },
      error=> {

        console.log(error);

      });

  }

}
