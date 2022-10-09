import React from 'react';
import Image from 'next/image';
import Luna from 'public/luna.jpg';

const displayedUserId = 'displayed-user';

export const DisplayedUser = () => (
  <span id={displayedUserId} className='rounded-full'>
    <Image src={Luna} alt='Logo' layout='fixed' width={60} height={50} priority id='site-logo' />
  </span>
);
