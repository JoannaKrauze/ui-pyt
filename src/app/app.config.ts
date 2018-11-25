import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable()
export class AppConfig {

  private config: Object = {
    host: "http://localhost:8090/"
  };

  constructor(private http: HttpClient) { }

  public getConfig(key: any) {
    return this.config[key] || '';
  }

}
