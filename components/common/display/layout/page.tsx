import React, { FC, ReactNode } from 'react';
import { SearchInput } from 'components/common/controls/searchInput';
import { STRINGS } from 'constants/global';
import Image from 'next/image';
import BackgroundImage from 'public/web.png';

interface PageProps {
  title: ReactNode;
  route?: string;
  children?: ReactNode;
  showHero?: boolean;
}

export const pageTestIds = {
  main: 'main',
  title: 'view-header-title',
  mainContent: 'main-content',
};

export const Page: FC<PageProps> = ({ title, route, children, showHero = false }) => {
  const searchInputContent = route && <SearchInput route={route} placeholder={STRINGS.moviePlaceHolder} />;

  return (
    <div>
      {showHero && (
        <div className='hero-container'>
          <Image src={BackgroundImage} className='hero-image' alt='Hero' layout='fill' priority id='site-logo' />
          <div className='hero'>Next.js | SWR | GraphQL | Tailwind</div>
        </div>
      )}
      <main className='m-6 h-full' id={pageTestIds.main}>
        <div className='my-12 content-center'>
          <h1 className='text-3xl font-bold' id={pageTestIds.title}>
            {title}
          </h1>
        </div>
        <div className='flex flex-col h-full w-full max-w-screen-2xl m-auto' id={pageTestIds.mainContent}>
          {searchInputContent}
          {children}
        </div>
      </main>
    </div>
  );
};
