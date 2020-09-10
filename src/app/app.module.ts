import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
@NgModule({
  declarations: [AppComponent, WeatherAppComponent],
  imports: [BrowserModule, HttpClientModule, AngularSvgIconModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
