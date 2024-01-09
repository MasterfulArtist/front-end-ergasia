import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string=''
  password:string=''

  constructor(private authservice:AuthService){

  }

  ngOnInit() {

  }

  login(){

    console.log(this.username + " " + this.password);
    this.authservice.signin(this.username,this.password).subscribe(
      response => {

        console.log(response.email);


      },
      error=> {

        console.log(error);

      }

    );
    console.log('test');

  }

  logout(){

    this.authservice.signin(this.username,this.password).subscribe(

      response => {

      },
      error=> {

      }

    );

  }

  getallaccounts(){

    this.authservice.getallaccounts().subscribe(
      response => {

        console.log(response);


      },
      error=> {

        console.log(error);

      }

    );


  }



}
