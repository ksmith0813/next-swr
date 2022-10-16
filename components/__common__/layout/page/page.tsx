import React, { FC } from 'react';
import { SearchInput } from 'components/__common__/controls/searchInput';
import { STRINGS } from 'constants/global';
import { Hero } from '../hero/hero';

interface PageProps {
  title: string;
  route?: string;
  children?: React.ReactNode;
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
      {showHero && <Hero />}
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
