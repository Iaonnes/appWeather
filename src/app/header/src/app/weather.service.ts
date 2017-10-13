import { Injectable } from '@angular/core';

import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
	
  mycurrent: CurrentWeather [] = [

			new CurrentWeather('Guadalajara','27°',
			  				   'https://icons.wxug.com/i/c/g/partlycloudy.gif',
			                   'nublado','27°','18°')

  ] 
  constructor() { }

  weatherNow(){
    return this.mycurrent;
  }

}
