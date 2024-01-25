import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {StorageService} from "../services/storage.service";
import {EventBusService} from "./event-bus.service";
import {EventData} from "./event.class";



@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(private storageService: StorageService, private eventBusService: EventBusService) { }


  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = window.sessionStorage.getItem("token");

    if (idToken) {
      req = req.clone({
        withCredentials: true,
        headers: req.headers.set("Authorization",
          this.removeQuotesFromString(idToken))
      });

      return next.handle(req);
    }
    else {
      return next.handle(req);
    }

  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.storageService.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }

  removeQuotesFromString(inputString: string): string {
    if (inputString.length >= 2 && inputString[0] === '"' && inputString[inputString.length - 1] === '"') {
      // If the string has at least two characters and the first and last characters are double quotes
      return inputString.substring(1, inputString.length - 1);
    } else {
      // Otherwise, return the original string
      return inputString;
    }
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];
