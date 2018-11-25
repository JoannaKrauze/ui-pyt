import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppConfig } from 'src/app/app.config';
// import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MainInterceptor implements HttpInterceptor {

  constructor(
    private config: AppConfig,
    private router: Router,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const pageReq = request.clone({
      withCredentials: true,
      url: this.config.getConfig('host') + request.url
    });
    return next.handle(pageReq)
      .pipe(
        catchError(
          (error: any, caught: Observable<HttpEvent<any>>) => {
            if (error.status === 401) {
              this.handleAuthError();
              // return of(error);
            }
            throw error;
          }
        ),
    );
  }
  private handleAuthError() {
    console.log("logg")
    this.router.navigate(['/login']);
  }

}
