import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private storageService:StorageService,
              private router:Router) {
  }



  logout(){

    if(this.storageService.isLoggedIn()) {
      this.storageService.clean();
      this.router.navigate(["/"]);
    }

  }

  isLogIn() :boolean{

    return this.storageService.isLoggedIn();

  }

  isFarmer():boolean{

    return (this.storageService.getUser().roles[0]==="ROLE_USER");

  }

  isAdmin():boolean{

    return (this.storageService.getUser().roles[0]==="ROLE_ADMIN");

  }

}
