import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string=''
  password:string=''

  constructor(private authservice:AuthService,
              private matDialogue:MatDialog){

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

  register(){
    this.username='';
    this.password='';
    const dialogRef=this.matDialogue.open(
      RegisterComponent,
    {
      width:'400px',
      height:'600px'
      }

    );


  }


}
