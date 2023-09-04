import { Component, Output } from '@angular/core';
import * as moment from 'moment';

import { WeatherService } from 'src/app/services/weather.service';
import { IWeather } from 'src/app/Typy/IWeather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  error: boolean = false;
  data: any;
  weatherDatas: IWeather[] = [];
  city: string = 'Kraków';

  constructor(private weatherService: WeatherService) {}

  searchCity(city: string) {
    this.error = false;
    this.city = city;
    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        this.data = res;
        const dateTimeFull: moment.Moment = moment
          .utc(this.data.dt, 'X')
          .add(this.data.timezone, 'seconds');
        const dateTimeSunrise: moment.Moment = moment
          .utc(this.data.sys.sunrise, 'X')
          .add(this.data.timezone, 'seconds');
        const dateTimeSunset: moment.Moment = moment
          .utc(this.data.sys.sunset, 'X')
          .add(this.data.timezone, 'seconds');
        this.weatherDatas = [
          {
            name: this.data.name,
            dateTime: dateTimeFull.format('HH:mm -  DD/MM/YYYY'),
            temp: this.data.main.temp,
            tempFealsLike: this.data.main.feels_like,
            pressure: this.data.main.pressure,
            humidity: this.data.main.humidity,
            windSpeed: this.data.wind.speed,
            sunrise: dateTimeSunrise.format('HH:mm'),
            sunset: dateTimeSunset.format('HH:mm'),
            description: this.data.weather[0].description,
            iconUrl:
              'https://openweathermap.org/img/wn/' +
              this.data.weather[0].icon +
              '@2x.png',
          },
        ];
      },

      error: (error) => {
        console.log(error.message);
        this.error = true;
      },

      complete: () => console.info('Api call complete'),
    });
  }

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (res) => {
        this.data = res;
        const dateTimeFull: moment.Moment = moment
          .utc(this.data.dt, 'X')
          .add(this.data.timezone, 'seconds');
        const dateTimeSunrise: moment.Moment = moment
          .utc(this.data.sys.sunrise, 'X')
          .add(this.data.timezone, 'seconds');
        const dateTimeSunset: moment.Moment = moment
          .utc(this.data.sys.sunset, 'X')
          .add(this.data.timezone, 'seconds');
        this.weatherDatas = [
          {
            name: this.data.name,
            dateTime: dateTimeFull.format('HH:mm -  DD/MM/YYYY'),
            temp: this.data.main.temp,
            tempFealsLike: this.data.main.feels_like,
            pressure: this.data.main.pressure,
            humidity: this.data.main.humidity,
            windSpeed: this.data.wind.speed,
            sunrise: dateTimeSunrise.format('HH:mm'),
            sunset: dateTimeSunset.format('HH:mm'),
            description: this.data.weather[0].description,
            iconUrl:
              'https://openweathermap.org/img/wn/' +
              this.data.weather[0].icon +
              '@2x.png',
          },
        ];
      },

      error: (error) => console.log(error.message),

      complete: () => console.info('Api call complete'),
    });
  }
}
