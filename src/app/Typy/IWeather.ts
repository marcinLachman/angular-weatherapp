export interface IWeather {
  id?: number;
  name: string;
  dateTime: string;
  temp: number;
  tempFealsLike: number;
  pressure: number;
  humidity: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
  iconUrl: string;
  description: string;
}
