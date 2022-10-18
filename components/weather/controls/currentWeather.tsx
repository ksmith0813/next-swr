import React from 'react';
import { Col, Progress, Row, Tag } from 'antd';
import { DataItem } from 'components/common/display/dataItem';
import { useWeatherContext, WeatherContextProps } from '../context/weatherContext';
import { WeatherProps } from '../types/weather';

export const CurrentWeather = () => {
  const { weather, tempType } = useWeatherContext() as WeatherContextProps;

  const selectedWeather: WeatherProps = weather;
  const { current } = selectedWeather;

  return (
    <>
      <Row>
        <Col span={12}>
          <DataItem label='Current Temp' childrenClasses='text-xl'>{`${
            !tempType || tempType === 'F' ? current.temp_f : current.temp_c
          }° ${tempType}`}</DataItem>
        </Col>
        <Col span={12}>
          <DataItem label='Feels Like' childrenClasses='text-xl'>{`${
            !tempType || tempType === 'F' ? current.feelslike_f : current.feelslike_c
          }° ${tempType}`}</DataItem>
        </Col>
      </Row>
      {current?.condition && (
        <Row className='pt-6'>
          <Col span={12}>
            <DataItem label='Condition' childrenClasses='text-xl'>
              {current.condition.text}
            </DataItem>
          </Col>
          <Col span={12}>
            <img src={current.condition.icon} alt='' />
          </Col>
        </Row>
      )}
      <DataItem label='Humidity' labelClasses='pt-6'>
        <Progress percent={current.humidity} />
      </DataItem>
      <DataItem label='Cloud Cover' labelClasses='pt-6'>
        <Progress percent={current.cloud} />
      </DataItem>
      <Row className='pt-6'>
        <Col span={12}>
          <DataItem label='Wind' labelClasses='pt-6'>
            {`${current.wind_mph} MPH`}
          </DataItem>
        </Col>
        <Col span={12}>
          <DataItem label='Wind Direction' labelClasses='pt-6'>
            <Tag>{current.wind_dir}</Tag>
          </DataItem>
        </Col>
      </Row>
    </>
  );
};
