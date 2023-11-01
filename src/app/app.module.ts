import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent,
     LoginComponent,
     NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
