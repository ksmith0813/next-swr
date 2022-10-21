import React, { FC, ReactNode } from 'react';
import { SearchInput } from 'components/common/controls/searchInput';
import { ROUTES, STRINGS } from 'constants/global';

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

const getPlaceholder = (route: string) => {
  switch (route) {
    case ROUTES.weather:
    case ROUTES.weatherSearch:
      return STRINGS.weatherPlaceHolder;
    case ROUTES.media:
    case ROUTES.mediaSearch:
      return STRINGS.mediaPlaceHolder;
    default:
      return STRINGS.peoplePlaceHolder;
  }
};

export const Page: FC<PageProps> = ({ title, route, children, showHero = false }) => {
  const searchInputContent = route && <SearchInput route={route} placeholder={getPlaceholder(route)} />;

  return (
    <div>
      {showHero && (
        <div className='hero-container'>
          <div>Next.js | SWR | Redux Toolkit | GraphQL | Tailwind</div>
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
