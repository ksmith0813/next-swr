import React from 'react';
import { AvatarLogo } from './avatarLogo';
import { Logo } from './logo';

export const Header = () => (
  <div className='header-container' id='header'>
    <div>
      <Logo />
    </div>
    <div>
      <AvatarLogo />
    </div>
  </div>
);
