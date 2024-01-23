import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestForApprovalService {

  constructor(private httpclient:HttpClient) {}

  getApprovalRequests(){

    return this.httpclient.get<any>("http://localhost:9090/api/requestForApproval");

  }

  postApprovalRequests(name:string, details:string, farmers:any[], products:any[],region:number){

    return this.httpclient.post<any>("http://localhost:9090/api/requestForApproval/newRequestForApproval",
      {

        name:name,
        details:details,
        farmers:farmers,
        products:products,
        region:region

      });

  }

}
