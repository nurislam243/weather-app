export type GeoResult = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type CurrentWeather = {
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  weather_code: number;
};

export type WeatherData = {
  city: string;
  country: string;
  current: CurrentWeather;
};