import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configWeatherUrl } from '../app.config';
import { WeatherApi } from '../models/weatherApi.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  weather(value) {
    // debugger;
    console.log("the url is", configWeatherUrl.serverUrl.concat(value.city).concat(',').concat(value.code).concat(configWeatherUrl.apiKey));
    return this.http.get<WeatherApi>( configWeatherUrl.serverUrl.concat(value.city).concat(',').concat(value.countryCode).concat(configWeatherUrl.apiKey));
  }
}
