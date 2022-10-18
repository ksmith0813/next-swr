import React from 'react';
import { Col, Row } from 'antd';
import { DataItem } from 'components/common/display/dataItem';
import { MoonPhase } from './moonPhase';
import { useWeatherContext, WeatherContextProps } from '../context/weatherContext';
import { WeatherProps } from '../types/weather';

export const Astro = () => {
  const { weather } = useWeatherContext() as WeatherContextProps;

  const selectedWeather: WeatherProps = weather;
  const forecastDay = selectedWeather.forecast?.forecastday[0];
  const { astro } = forecastDay;

  return (
    <>
      <Row>
        <Col span={12}>
          <DataItem label='Sunrise' childrenClasses='text-xl'>
            {astro.sunrise}
          </DataItem>
        </Col>
        <Col span={12}>
          <DataItem label='Sunset' childrenClasses='text-xl'>
            {astro.sunset}
          </DataItem>
        </Col>
      </Row>
      <Row className='pt-6'>
        <Col span={12}>
          <DataItem label='Moon Phase'>{astro.moon_phase}</DataItem>
        </Col>
        <Col span={12}>
          <MoonPhase phase={astro.moon_phase} />
        </Col>
      </Row>
    </>
  );
};
