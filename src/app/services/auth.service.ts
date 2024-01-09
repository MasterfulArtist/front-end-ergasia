import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient) {

  }

  signin(username:string , password:string){

    return this.httpclient.post<any>("http://localhost:9090/api/auth/signin",{
      username:username,password:password
      })

  }

  signout(){

    return this.httpclient.post<any>("http://localhost:9000/api/auth/signout",{
    })

  }

  getallaccounts(){

    return this.httpclient.get<any>("http://localhost:9000/api/account/accounts_list",{
    })

  }

  signup(username:string , email:string, password:string){

    return this.httpclient.post<any>("http://localhost:9090/api/auth/signup",{
      username:username, email:email, password:password
    })

  }


}
