import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IWeather } from '../Typy/IWeather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Broome&lang=pl&appid=33b8c88e24fd7520b39e5ab673cbc04c&units=metric`;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<IWeather[]> {
    return this.http.get<IWeather[]>(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&appid=33b8c88e24fd7520b39e5ab673cbc04c&units=metric`
    );
  }
}
