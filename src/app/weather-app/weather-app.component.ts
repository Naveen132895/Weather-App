import { WeatherService } from './../service/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css'],
})
export class WeatherAppComponent implements OnInit {
  constructor(private weatherservice: WeatherService) {}
  temp: string;
  date: Date;
  feels_like: string;
  city = '';
  wind: number;
  humidity: string;
  description: string;
  iconcode: number;
  iconUrl: string;
  error: String;
  obj: object;
  fetchWeather(city: string) {
    this.weatherservice.getWeather(city).subscribe(
      (response) => {
        this.setWeatherData(response);
        var obj = { City: response.name };
        console.log(obj[0]);
      },
      (error) => {
        this.error = error;
      }
    );
  }
  onFormSubmit(event: any) {
    this.refresh();
    event.preventDefault();
    this.fetchWeather(this.city.trim());
  }
  setWeatherData(data) {
    this.temp = (data.main.temp - 273.15).toFixed(0);
    this.date = new Date();
    this.feels_like = (data.main.feels_like - 273.15).toFixed(0);

    this.wind = Math.round(Number(data.wind.speed) * 1.609);
    this.humidity = data.main.humidity;
    this.city = data.name;
    this.description = data.weather[0].description;
    this.iconcode = data.weather[0].icon;
    //console.log(this.iconcode);
    this.iconUrl = `http://openweathermap.org/img/w/${this.iconcode}.png`;
  }
  refresh() {
    this.temp = '';
    this.error = '';
  }
  ngOnInit(): void {}
}
