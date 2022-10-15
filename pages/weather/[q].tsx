import React from 'react';
import { Weather as WeatherContent } from 'components/weather/weather';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Weather: NextPage = () => {
  const router = useRouter();
  const search = router?.query?.q as string;

  return <WeatherContent search={search} />;
};

export default Weather;
