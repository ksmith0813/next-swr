import React, { FC } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Nextjs SWR</title>
    </Head>
    <div className='flex flex-col h-screen print-fit'>
      <div className='flex-1'>{children}</div>
    </div>
  </>
);
