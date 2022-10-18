import React, { FC } from 'react';
import { Col, Progress, Row, Tag } from 'antd';
import { DataItem } from 'components/common/display/dataItem';

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

interface CurrentWeatherProps {
  current: CurrentProps;
  tempType: string;
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ current, tempType }) => (
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
