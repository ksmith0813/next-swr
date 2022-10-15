import { ROUTES, STRINGS } from 'constants/global';
import Link from 'next/link';
import React from 'react';
import { AvatarLogo } from './avatarLogo';
import { Logo } from './logo';

export const Header = () => (
  <div className='header-container' id='header'>
    <div>
      <Logo />
    </div>
    <div className='header'>
      <Link href={ROUTES.home} id='home-link'>
        Home
      </Link>
      <Link href={{ pathname: ROUTES.media, query: { q: STRINGS.search } }} id='media-link'>
        Media
      </Link>
      <Link href={{ pathname: ROUTES.weather, query: { q: STRINGS.search } }} id='weather-link'>
        Weather
      </Link>
      <Link href={{ pathname: ROUTES.people, query: { q: STRINGS.search } }} id='people-link'>
        People
      </Link>
    </div>
    <div>
      <AvatarLogo />
    </div>
  </div>
);
