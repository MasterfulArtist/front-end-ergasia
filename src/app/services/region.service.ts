import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpclient:HttpClient) {}

  getRegions(){

    return this.httpclient.get<any>("http://localhost:9090/api/region");

  }

}
