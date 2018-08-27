import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configWeatherUrl } from '../app.config';



@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  countryList() {
    return this.http.get(configWeatherUrl.countryUrl );
  }

  cityList(country){
    return this.http.get(configWeatherUrl.cityUrl.concat(country).concat(configWeatherUrl.cityQuery));
  }
}
