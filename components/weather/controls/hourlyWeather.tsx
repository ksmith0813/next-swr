import React from 'react';
import moment from 'moment';
import { Row } from 'antd';
import { useWeatherContext, WeatherContextProps } from '../context/weatherContext';
import { WeatherProps } from '../types/weather';

export const HourlyWeather = () => {
  const { weather, tempType } = useWeatherContext() as WeatherContextProps;

  const selectedWeather: WeatherProps = weather;
  const currentTime = moment().local();
  const forecastDay = selectedWeather.forecast?.forecastday[0];
  const forecastHourly = forecastDay ? forecastDay.hour.filter((f) => moment(f.time) >= currentTime) : null;

  return (
    <>
      <Row className='p-4 pt-8 text-xl border-b border-grayScale03'>
        Hourly Weather for {moment().format('MM/DD/YYYY')}
      </Row>
      <Row className='hourly-forecast'>
        {forecastHourly?.map((f) => (
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
};
