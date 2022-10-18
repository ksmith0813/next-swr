import React, { useState } from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { useRouter } from 'next/router';
import { NoData } from 'components/common/display/noData';
import useSWR from 'swr';
import { exists, useSWRReady } from 'utils/swr';
import { GET_WEATHER } from 'graphql/weather';
import moment from 'moment';
import { Col, Row } from 'antd';
import { Astro } from './controls/astro';
import { CurrentProps, CurrentWeather, LocationProps } from './controls/currentWeather';
import { HeaderRow } from './controls/headerRow';
import { ForecastProps, HourlyWeather } from './controls/hourlyWeather';
import { LocationTime } from './controls/locationTime';

interface WeatherProps {
  location: LocationProps;
  current: CurrentProps;
  forecast: ForecastProps;
}

export const Weather = () => {
  const router = useRouter();

  const [tempType, setTempType] = useState('F');

  const search = router?.query?.q as string;

  const { data } = useSWR(useSWRReady(exists(search), GET_WEATHER, { search }));

  if (!data) {
    return (
      <Page title={TITLES.weather} route={ROUTES.weatherSearch}>
        <NoData />
      </Page>
    );
  }

  const { weather } = data;

  const selectedWeather: WeatherProps = weather;

  const currentTime = moment().local();
  const { location } = selectedWeather;
  const { current } = selectedWeather;
  const forecastDay = selectedWeather.forecast?.forecastday[0];
  const forecastHourly = forecastDay ? forecastDay.hour.filter((f) => moment(f.time) >= currentTime) : null;

  return (
    <Page title={TITLES.weather} route={ROUTES.weatherSearch}>
      <div className='weather-container bg-white'>
        <HeaderRow location={location} tempType={tempType} setTempType={setTempType} />
        <Row className='pt-8'>
          <Col span={8}>{/* <MapLocation location={location} containerClass='map-container' /> */}</Col>
          <Col span={8} className='pl-12'>
            <CurrentWeather current={current} tempType={tempType} />
          </Col>
          <Col span={8} className='pl-12'>
            <Astro astro={forecastDay.astro} />
            <LocationTime location={location} />
          </Col>
        </Row>
        {forecastHourly && <HourlyWeather forecastHourly={forecastHourly} tempType={tempType} />}
      </div>
    </Page>
  );
};
