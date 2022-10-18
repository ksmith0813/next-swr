import React from 'react';
import moment from 'moment';
import { Col, Row } from 'antd';
import { DataItem } from 'components/common/display/dataItem';
import { DATE_FORMAT } from 'constants/global';
import { useWeatherContext, WeatherContextProps } from '../context/weatherContext';
import { WeatherProps } from '../types/weather';

export const LocationTime = () => {
  const { weather } = useWeatherContext() as WeatherContextProps;

  const selectedWeather: WeatherProps = weather;
  const { location } = selectedWeather;

  return (
    <>
      <Row className='pt-4'>
        <Col span={12}>
          <DataItem label='Local Time' labelClasses='pt-4'>
            {moment(location.localtime, DATE_FORMAT.time).format(DATE_FORMAT.time)}
          </DataItem>
        </Col>
        <Col span={12}>
          <DataItem label='Timezone' labelClasses='pt-4'>
            {location.tz_id}
          </DataItem>
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col span={12}>
          <DataItem label='Latitude'>{location.lat}</DataItem>
        </Col>
        <Col span={12}>
          <DataItem label='Longitude'>{location.lon}</DataItem>
        </Col>
      </Row>
    </>
  );
};
