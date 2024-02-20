import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../register/register.component";
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string=''
  password:string=''
  isLoggedIn:boolean=false;

  constructor(private authservice:AuthService,
              private storageService:StorageService,
              private matDialogue:MatDialog,
              private router:Router){

  }

  ngOnInit() {

  }

  login(){

    console.log(this.username + " " + this.password);
    this.authservice.signin(this.username,this.password).subscribe(
      response => {

        this.storageService.setSession(response.accessToken);
        delete response.accessToken;
        this.storageService.saveUser(response);
        this.isLoggedIn=true;
        this.router.navigate(["/home"]);

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

  logout(){

    if(this.storageService.isLoggedIn()) {
      this.storageService.clean();
      this.isLoggedIn=false;
      this.router.navigate(["/"]);
    }

  }


}
