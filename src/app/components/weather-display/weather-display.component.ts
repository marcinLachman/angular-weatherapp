import { Component, Input } from '@angular/core';

import { IWeather } from 'src/app/Typy/IWeather';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent {
  @Input() weatherData!: IWeather;
}
