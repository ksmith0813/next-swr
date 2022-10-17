import { ROUTES } from 'constants/global';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AvatarLogo } from './avatarLogo';
import { Logo } from './logo';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const routeClass = (routes: string[]) => `${routes.includes(pathname) ? 'current-route' : ''}`;

  return (
    <div className='header-container' id='header'>
      <div>
        <Logo />
      </div>
      <div className='header'>
        <div className={routeClass([ROUTES.home])}>
          <Link href={ROUTES.home} id='home-link'>
            Home
          </Link>
        </div>
        <div className={routeClass([ROUTES.media, ROUTES.mediaSearch, ROUTES.mediaDetail])}>
          <Link href={{ pathname: ROUTES.media }} id='media-link'>
            Media
          </Link>
        </div>
        <div className={routeClass([ROUTES.weather, ROUTES.weatherSearch])}>
          <Link href={{ pathname: ROUTES.weather }} id='weather-link'>
            Weather
          </Link>
        </div>
        <div className={routeClass([ROUTES.people, ROUTES.peopleSearch])}>
          <Link href={{ pathname: ROUTES.people }} id='people-link'>
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
