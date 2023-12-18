import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";

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

    this.authservice.signin(this.username,this.password);

  }


}
