import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  username: string='';
  email: string='';
  password: string='';

  constructor(private authservice:AuthService,
              private dialogref:MatDialogRef<RegisterComponent>){

  }

  ngOnInit(): void {



  }

  signup(){

    this.authservice.signup(this.username,this.email, this.password).subscribe(
      response => {

        console.log(response);
        this.dialogref.close();

      },
      error=> {

        console.log(error);

      }

    );


  }


}
