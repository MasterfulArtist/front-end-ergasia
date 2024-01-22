import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  firstName: string='';
  lastName: string='';
  username: string='';
  email: string='';
  password: string='';
  phone: string='';

  constructor(private authservice:AuthService,
              private accountService:AccountService,
              private dialogref:MatDialogRef<RegisterComponent>){

  }

  ngOnInit(): void {}

  signup(){
    this.authservice.signup(this.username,this.email, this.password).subscribe(
      response => {

        console.log(response);

        this.accountService.createFarmerAccount(this.firstName,this.lastName,
          this.username,this.email,this.password,this.phone).subscribe(
          resp => {

            this.dialogref.close();

          },
          error =>{

          });

      },
      error=> {

        console.log(error);

      }

    );


  }



}
