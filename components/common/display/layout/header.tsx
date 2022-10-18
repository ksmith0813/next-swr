import React from 'react';
import { Avatar } from 'antd';
import { ROUTES } from 'constants/global';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Luna from 'public/luna.jpg';
import Signature from 'public/signature.png';

export const displayedUserId = 'displayed-user';

export const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const routeClass = (routes: string[]) => `${routes.includes(pathname) ? 'current-route' : ''}`;

  return (
    <div className='header-container' id='header'>
      <div>
        <div className='w-auto inline-flex cursor-pointer'>
          <Image
            src={Signature}
            alt='Logo'
            layout='fixed'
            width={160}
            height={45}
            priority
            onClick={() => router.push({ pathname: '/' })}
            id='site-logo'
          />
        </div>
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
        <span id={displayedUserId}>
          <Avatar
            size={40}
            src={<Image src={Luna} alt='Logo' layout='fixed' width={40} height={40} priority id='site-logo' />}
          />
        </span>
      </div>
    </div>
  );
};
