import React, { FC } from 'react';
import { Row } from 'antd';
import { SearchInput } from 'components/__common__/search/searchInput';
import { PLACEHOLDERS } from 'constants/global';
import { Header } from '../header/header';
import { Hero } from '../hero/hero';

interface PageProps {
  title: string;
  children?: React.ReactNode;
  showHero?: boolean;
}

export const pageTestIds = {
  title: 'view-header-title',
  mainBody: 'main-body',
  mainBodyContent: 'main-body-content',
};

export const Page: FC<PageProps> = ({ title, children, showHero = false }) => {
  const searchInputContent = <SearchInput placeholder={PLACEHOLDERS.searchInput} hasSearchIcon />;

  const titleContent = (
    <Row id='view-header' className='mb-4 print:space-y-4'>
      <h1 className='text-3xl font-bold' id={pageTestIds.title}>
        {title}
      </h1>
    </Row>
  );

  const pageContent = <div className='flex flex-col h-full w-full'>{children}</div>;

  return (
    <div className='flex flex-col h-full w-full overflow-auto'>
      <Header />
      {showHero && <Hero />}
      <main className='m-6 print:mx-0 h-full' id={pageTestIds.mainBody}>
        <div className='space-y-2 flex flex-col h-full m-auto' id={pageTestIds.mainBodyContent}>
          {titleContent}
          {searchInputContent}
          {pageContent}
        </div>
      </main>
    </div>
  );
};
