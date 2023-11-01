import { NgModule } from '@angular/core';

import { AppComponent } from './root/app.component';
import {BrowserModule} from "@angular/platform-browser";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
