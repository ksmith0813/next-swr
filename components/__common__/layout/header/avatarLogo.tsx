import React from 'react';
import Image from 'next/image';
import Luna from 'public/luna.jpg';
import { Avatar } from 'antd';

export const displayedUserId = 'displayed-user';

export const AvatarLogo = () => (
  <span id={displayedUserId}>
    <Avatar
      size={40}
      src={<Image src={Luna} alt='Logo' layout='fixed' width={40} height={40} priority id='site-logo' />}
    />
  </span>
);
