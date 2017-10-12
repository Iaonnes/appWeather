import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { weatherRouting } from './weather.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    weatherRouting

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }