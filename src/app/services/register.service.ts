import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  register(value) {
    console.log("the url is" , config.serviceUrl.concat(config.apiUrl).concat('register'));
    return this.http.post(config.serviceUrl.concat(config.apiUrl).concat('register'), value);
  }
}
