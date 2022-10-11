import React from 'react';
import Image from 'next/image';
import Luna from 'public/luna.jpg';
import { Avatar } from 'antd';

export const displayedUserId = 'displayed-user';

export const DisplayedUser = () => (
  <span id={displayedUserId}>
    <Avatar
      size={50}
      src={<Image src={Luna} alt='Logo' layout='fixed' width={50} height={50} priority id='site-logo' />}
    />
  </span>
);
