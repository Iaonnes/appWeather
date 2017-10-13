export class CurrentWeather {

    public cityName: string;
    public temp: string;
    public icon: string;
    public weatherKind: string;
    public tempMax: string;
    public tempMin: string;

 constructor(cityName:string, temp:string, icon:string,
 			 weatherKind:string, tempMax:string, tempMin:string){ 

 					this.cityName = cityName;
 					this.temp = temp;
 					this.icon = icon;
 					this.weatherKind = weatherKind;
 					this.tempMax = tempMax;
 					this.tempMin  = tempMin;

 			  }

}
