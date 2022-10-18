import React, { FC } from 'react';
import { Col, Row, Switch } from 'antd';
import { LocationProps } from './currentWeather';

interface HeaderRowProps {
  location: LocationProps;
  tempType: string;
  setTempType: (checked: string) => void;
}

export const HeaderRow: FC<HeaderRowProps> = ({ location, tempType, setTempType }) => (
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
