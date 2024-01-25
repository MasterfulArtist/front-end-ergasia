import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpclient:HttpClient) { }

  getFarmerAccounts(){

    return this.httpclient.get<any>("http://localhost:9090/api/farmers")

  }

  getSupervisorAccounts(){

    return this.httpclient.get<any>("http://localhost:9090/api/supervisor")

  }

  createFarmerAccount(firstName:string , lastName:string , userName:string,
                          email:string, password:string , phone:string ){

    return this.httpclient.post<any>("http://localhost:9090/api/farmers/newFarmer",

      {
        firstName:firstName,
        lastName:lastName,
        username:userName,
        email:email,
        password:password,
        phone:phone
      }

    )

  }


  createSupervisorAccount(firstName:string , lastName:string , userName:string,
                email:string, password:string , phone:string ){

    return this.httpclient.post<any>("http://localhost:9090/api/supervisor/newSupervisor",

      {
        firstName:firstName,
        lastName:lastName,
        username:userName,
        email:email,
        password:password,
        phone:phone
      }

    )

  }

  createUserFarmerAccount(userName:string, email:string, password:string){

    return this.httpclient.post<any>("http://localhost:9090/api/auth/signupadmin"
      ,

      {
        username:userName,
        email:email,
        password:password,
        role:['ROLE_USER']
      }

    )

  }

  createUserSupervisorAccount(userName:string, email:string, password:string){

    return this.httpclient.post<any>("http://localhost:9090/api/auth/signupadmin"
      ,

      {
        username:userName,
        email:email,
        password:password,
        role:['ROLE_SUPERVISOR']
      }

    )

  }

  deleteAccount(Id:number){

    return this.httpclient.delete<any>("http://localhost:9090/api/product/deleteProductById/"+Id

    )

  }


}
