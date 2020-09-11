import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { pipe, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // city = 'Kolkata';
  // authkey: 'd101e3fb2a47c7a992119c16cffcb218';
  constructor(private http: HttpClient) {}
  getWeather(city: string) {
    return this.http
      .get<any>('https://api.openweathermap.org/data/2.5/weather?', {
        params: {
          q: city,
          appid: environment.key,
        },
      })
      .pipe(catchError(this.handleError));
  }
  handleError(error) {
    // return throwError(error.message);
    return throwError('Please check your city name');
  }
}
