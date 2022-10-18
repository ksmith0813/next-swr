export interface LocationProps {
  country: string;
  name: string;
  region: string;
  lat: string;
  lon: string;
  localtime: string;
  tz_id: string;
}

export interface ConditionProps {
  text: string;
  icon: string;
}

export interface AstroProps {
  sunrise: string;
  sunset: string;
  moon_phase: string;
}

export interface CurrentProps {
  temp_f: string;
  temp_c: string;
  feelslike_f: string;
  feelslike_c: string;
  condition: ConditionProps;
  humidity: number;
  cloud: number;
  wind_mph: string;
  wind_dir: string;
}

export interface ForecastHourProps {
  condition: ConditionProps;
  temp_c: number;
  temp_f: number;
  time_epoch: number;
  time: string;
}

export interface ForecastDayProps {
  astro: AstroProps;
  date: string;
  hour: ForecastHourProps[];
}

export interface ForecastProps {
  forecastday: ForecastDayProps[];
}

export interface HourlyWeatherProps {
  forecastHourly: ForecastHourProps[];
  tempType: string;
}

export interface WeatherProps {
  location: LocationProps;
  current: CurrentProps;
  forecast: ForecastProps;
}
