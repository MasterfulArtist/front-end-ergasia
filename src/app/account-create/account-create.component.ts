import { Component } from '@angular/core';
import {ProductService} from "../services/product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AccountService} from "../services/account.service";

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

  firstName:string = '';
  lastName:string = '';
  userName:string = '';
  email:string = '';
  password:string = '';
  phone:string = '';

  constructor(private accountService:AccountService,
              private matSnackBar:MatSnackBar,
              private router:Router){

  }

  addAccount(){

    this.accountService.createUserSupervisorAccount(this.userName,this.email,this.password).subscribe(
      response => {

        console.log(response);

        this.accountService.createSupervisorAccount(this.firstName,this.lastName,this.userName
        ,this.email,this.password,this.phone).subscribe(
          resp => {

            console.log(response);
            this.router.navigateByUrl('/account-list');

          },
          error => {

          }
        )

      },
      error=> {

        console.log(error);
        this.matSnackBar.open('Account could not be created',
          '',
          {duration:2000})

      }

    );

  }

  isDisabled():boolean {

    if(this.firstName === '' || this.lastName === ''
    || this.userName === '' || this.password === '' || this.phone === ''){
      return true;
    }
    return false;

  }

}
