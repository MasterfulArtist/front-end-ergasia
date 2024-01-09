import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  username: string='';
  email: string='';
  password: string='';

  constructor(private authservice:AuthService){

  }

  ngOnInit(): void {



  }

  signup(){

    this.authservice.signup(this.username,this.email, this.password).subscribe(
      response => {

        console.log(response);

      },
      error=> {

        console.log(error);

      }

    );


  }


}
