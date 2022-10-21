import React from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { NoData } from 'components/common/display/noData';
import moment from 'moment';
import { Col, Row } from 'antd';
import { Loader } from 'components/common/display/loader';
import { Astro } from './controls/astro';
import { CurrentWeather } from './controls/currentWeather';
import { HeaderRow } from './controls/headerRow';
import { HourlyWeather } from './controls/hourlyWeather';
import { LocationTime } from './controls/locationTime';
import { useWeatherContext, WeatherContextProps } from './context/weatherContext';
import { WeatherProps } from './types/weather';

export const Weather = () => {
  const { loading, weather } = useWeatherContext() as WeatherContextProps;

  if (!weather) {
    return (
      <Page title={TITLES.weather} route={ROUTES.weatherSearch}>
        <NoData />
      </Page>
    );
  }

  const selectedWeather: WeatherProps = weather;

  const currentTime = moment().local();
  const forecastDay = selectedWeather.forecast?.forecastday[0];
  const forecastHourly = forecastDay ? forecastDay?.hour.filter((f) => moment(f.time) >= currentTime) : null;

  return (
    <Page title={TITLES.weather} route={ROUTES.weatherSearch}>
      <Loader loading={loading}>
        <div className='weather-container'>
          <HeaderRow />
          <Row className='pt-8'>
            <Col span={8} className='pl-6 text-grayScale05 text-xl content-center'>
              Map Coming soon
            </Col>
            <Col span={8} className='pl-12'>
              <CurrentWeather />
            </Col>
            <Col span={8} className='pl-12'>
              <Astro />
              <LocationTime />
            </Col>
          </Row>
          {forecastHourly && <HourlyWeather />}
        </div>
      </Loader>
    </Page>
  );
};
