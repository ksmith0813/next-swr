import React, { FC } from 'react';
import moment from 'moment';
import { Row } from 'antd';
import { ConditionProps } from './currentWeather';
import { AstroProps } from './astro';

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
  hour: [ForecastHourProps];
}

export interface ForecastProps {
  forecastday: ForecastDayProps[];
}

interface HourlyWeatherProps {
  forecastHourly: ForecastHourProps[];
  tempType: string;
}

export const HourlyWeather: FC<HourlyWeatherProps> = ({ forecastHourly, tempType }) => (
  <>
    <Row className='p-4 pt-8 text-xl border-b border-grayScale03'>
      Hourly Weather for {moment().format('MM/DD/YYYY')}
    </Row>
    <Row className='hourly-forecast'>
      {forecastHourly.map((f) => (
        <div key={f.time_epoch} className='forecast-item'>
          <div>
            <b>{moment(f.time).format('hA')}</b>
          </div>
          <div className='pt-3'>
            <img src={f.condition?.icon} alt='' />
          </div>
          <div className='pt-3 text-grayScale05'>{`${tempType === 'F' ? f.temp_f : f.temp_c}° ${tempType}`}</div>
          <div className='pt-3 text-grayScale07'>{f.condition?.text}</div>
        </div>
      ))}
    </Row>
  </>
);
