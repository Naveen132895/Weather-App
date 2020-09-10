import { environment } from './../../environments/environment.prod';
// import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // city = 'Kolkata';
  // authkey: 'd101e3fb2a47c7a992119c16cffcb218';
  constructor(private http: HttpClient) {}
  getWeather(city: string) {
    return this.http.get<any>(
      'https://api.openweathermap.org/data/2.5/weather?',
      {
        params: {
          q: city,
          appid: environment.key,
        },
      }
    );
  }
}
