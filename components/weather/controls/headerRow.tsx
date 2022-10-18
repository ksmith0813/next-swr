import React from 'react';
import { Col, Row, Switch } from 'antd';
import { useWeatherContext, WeatherContextProps } from '../context/weatherContext';
import { WeatherProps } from '../types/weather';

export const HeaderRow = () => {
  const { weather, tempType, setTempType } = useWeatherContext() as WeatherContextProps;

  const selectedWeather: WeatherProps = weather;
  const { location } = selectedWeather;

  return (
    <Row className='p-4 pl-6 text-2xl border-b border-grayScale03' align='middle'>
      <Col flex={1}>
        {location.name}, {location.region}
      </Col>
      <Col>
        <span className='mr-2'>Temp</span>
        <Switch
          checked={tempType === 'F'}
          unCheckedChildren='C'
          checkedChildren='F'
          onChange={(checked) => setTempType(checked ? 'F' : 'C')}
        />
      </Col>
    </Row>
  );
};
