import React, { FC } from 'react';
import { Hero } from '../hero/hero';

interface PageProps {
  title: string;
  children?: React.ReactNode;
  showHero?: boolean;
}

export const pageTestIds = {
  main: 'main',
  title: 'view-header-title',
  mainContent: 'main-content',
};

export const Page: FC<PageProps> = ({ title, children, showHero = false }) => (
  <div>
    {showHero && <Hero />}
    <main className='m-6 h-full' id={pageTestIds.main}>
      <div className='my-12 content-center'>
        <h1 className='text-3xl font-bold' id={pageTestIds.title}>
          {title}
        </h1>
      </div>
      <div className='flex flex-col h-full w-full' id={pageTestIds.mainContent}>
        {children}
      </div>
    </main>
  </div>
);
