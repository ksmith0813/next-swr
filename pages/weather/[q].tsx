import React from 'react';
import { Weather as WeatherContent } from 'components/weather/weather';
import type { NextPage } from 'next';
import { WeatherProvider } from 'components/weather/context/weatherContext';

const Weather: NextPage = () => (
  <WeatherProvider>
    <WeatherContent />
  </WeatherProvider>
);

export default Weather;
