import { ROUTES, STRINGS } from 'constants/global';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AvatarLogo } from './avatarLogo';
import { Logo } from './logo';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const routeClass = (route: string) => `${pathname === route ? 'current-route' : ''}`;

  return (
    <div className='header-container' id='header'>
      <div>
        <Logo />
      </div>
      <div className='header'>
        <div className={routeClass(ROUTES.home)}>
          <Link href={ROUTES.home} id='home-link'>
            Home
          </Link>
        </div>
        <div className={routeClass(ROUTES.media)}>
          <Link href={{ pathname: ROUTES.media, query: { q: STRINGS.search } }} id='media-link'>
            Media
          </Link>
        </div>
        <div className={routeClass(ROUTES.weather)}>
          <Link href={{ pathname: ROUTES.weather, query: { q: STRINGS.search } }} id='weather-link'>
            Weather
          </Link>
        </div>
        <div className={routeClass(ROUTES.people)}>
          <Link href={{ pathname: ROUTES.people, query: { q: STRINGS.search } }} id='people-link'>
            People
          </Link>
        </div>
      </div>
      <div>
        <AvatarLogo />
      </div>
    </div>
  );
};
