import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { pipe, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
   authkey :  string = 'd3c1450b0f021a1473e7810e627bd664';
   cityName : string;
  constructor(private http: HttpClient) {}
  getWeather(city: string) {
    this.cityName = city;
    return this.http
      .get<any>('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
          q: this.cityName,
          appid: this.authkey,
        },
      })
      .pipe(catchError(this.handleError));
  }
  handleError(error) {
    // return throwError(error.message);
    return throwError('Please check your city name');
  }
}
