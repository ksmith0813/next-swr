import React, { FC } from 'react';
import { Row } from 'antd';
import { SearchInput } from 'components/__common__/search/searchInput';
import { PLACEHOLDERS } from 'constants/global';
import { Header } from '../header/header';

interface PageProps {
  title: string;
  children?: React.ReactNode;
}

export const maxPageWidthClass = 'max-w-[1140px]';
export const pageTestIds = {
  title: 'view-header-title',
  mainBody: 'main-body',
  mainBodyContent: 'main-body-content',
};

export const Page: FC<PageProps> = ({ title, children }) => {
  const searchInputContent = <SearchInput placeholder={PLACEHOLDERS.searchInput} hasSearchIcon />;

  const pageContent = (
    <div className='flex flex-col h-full w-full'>
      <Row justify='space-between' id='view-header' className='mb-6 print:space-y-4'>
        <h1 className='text-5xl font-bold' id={pageTestIds.title}>
          {title}
        </h1>
      </Row>
      {children}
    </div>
  );

  return (
    <div className='flex flex-col h-full w-full overflow-auto'>
      <Header />
      <main className='m-6 print:mx-0 h-full' id={pageTestIds.mainBody}>
        <div className={`space-y-2 flex flex-col h-full m-auto ${maxPageWidthClass}`} id={pageTestIds.mainBodyContent}>
          {searchInputContent}
          {pageContent}
        </div>
      </main>
    </div>
  );
};
