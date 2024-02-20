import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) {}

  getProducts(){

    return this.httpclient.get<any>("http://localhost:9090/api/products")

  }

  createProducts(name:string , price:number){

    return this.httpclient.post<any>("http://localhost:9090/api/products/newProduct",

      {
        name:name,
        price:price
      }

    )

  }

  deleteProduct(Id:number){

    return this.httpclient.delete<any>("http://localhost:9090/api/products/deleteProductById/"+Id

    )

  }

}


