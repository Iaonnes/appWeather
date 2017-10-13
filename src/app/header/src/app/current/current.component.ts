import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
// import { CurrentWeather } from '../';


@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {



  constructor() { }
// private ws: WeatherService
  ngOnInit() {
	
  // this.myWeather = this.ws.weatherNow();

  }

}
