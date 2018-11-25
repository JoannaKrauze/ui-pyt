import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptor } from './main.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true },
];
