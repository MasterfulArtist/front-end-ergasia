import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient:HttpClient) {}

  getProducts(){

    return this.httpclient.get<any>("http://localhost:9090/api/product")

  }

}
