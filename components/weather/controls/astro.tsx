import React, { FC } from 'react';
import { Col, Row } from 'antd';
import { DataItem } from 'components/common/display/dataItem';
import { MoonPhase } from './moonPhase';

export interface AstroProps {
  sunrise: string;
  sunset: string;
  moon_phase: string;
}

interface AstroContentProps {
  astro: AstroProps;
}

export const Astro: FC<AstroContentProps> = ({ astro }) => (
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
