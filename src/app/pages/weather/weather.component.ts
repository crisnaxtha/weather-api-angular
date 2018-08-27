import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Location } from '../../models/location.model';
import { WeatherApi } from '../../models/weatherApi.model';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  location : Location;
  weatherApi:WeatherApi;
  country:any;
  cityList:any;
  cityShow:boolean = false;
  constructor(private _weather : WeatherService , private _location:LocationService) { }
  something :any;
  ngOnInit() {
    this.location = new Location;
    this.weatherApi = new WeatherApi;
    this.getCountryList();
  }

  getCountryList(){
    this._location.countryList().subscribe(data=>{
      console.log("the country list is" , data);
      this.country = data;
    },error=>{
      console.log("the error is" , error);
    })
  }

  getCity(){
    this.cityShow = false;
    this._location.cityList(this.location.countryCode).subscribe(data=>{
      console.log(data);
      this.cityList = data['geonames'];
      var countryCode = this.location.countryCode;
      this.cityList = this.cityList.filter(city => (city['fcode'] == 'PPLA' || city['fcode']=='PPLC' || city['fcode'] == 'PPL' ) && (city["countryCode"]== countryCode));
      this.cityShow = true;
    },error=>{
      console.log(error);
    })
  }
  inputInfo() {
    console.log('the user model value is', this.location);
    this._weather.weather(this.location).subscribe(data=>{
      // console.log(data);
      // console.log("somethingg nothing" , data);
      // debugger;
      this.weatherApi=data;
      // debugger;
   
    }, error=>{
      alert('error');
      console.log(error);
    })
  }


}
