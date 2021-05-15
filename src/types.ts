export interface City {
  name: string;
  country: string;
  lat?: number;
  lon?: number;
  local_names?: CityNames;
}

export interface CityNames {
  ar: string;
  ascii: string;
  de: string;
  el: string;
  en: string;
  feature_name: string;
  fi: string;
  fr: string;
  he: string;
  ja: string;
  lt: string;
  nl: string;
  no: string;
  pl: string;
  ro: string;
  ru: string;
  sr: string;
  sv: string;
  th: string;
}

export interface Weather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current?: WeatherCurrent;
  daily: WeatherDaily[];
  hourly?: WeatherHourly[];
}

export interface WeatherHourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherInfo[];
  pop: number;
  rain?: {
    "1h"?: number;
  };
}

export interface WeatherDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherInfo[];
  clouds?: number;
  pop?: number;
  rain?: number;
  uvi?: number;
}

export interface WeatherCurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherInfo[];
}

export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
