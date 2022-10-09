import React, { FC } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/dist/client/image';
import { Row } from 'antd';

interface BannerProps {
  icon?: StaticImageData;
  message: string;
}

export const testIds = {
  icon: 'banner-icon',
  message: 'banner-text',
};

export const Banner: FC<BannerProps> = ({ icon, message }) => (
  <Row className='banner flex items-center w-full' align='top'>
    {icon && <Image alt='!' src={icon} width={24} height={24} priority id={testIds.icon} />}
    <span className={`flex-1 ${icon ? 'ml-3' : ''}`} id={testIds.message}>
      {message}
    </span>
  </Row>
);
