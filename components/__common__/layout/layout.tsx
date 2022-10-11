/* eslint-disable @next/next/no-page-custom-font */
import React, { FC } from 'react';
import Head from 'next/head';
import { Footer } from 'components/__common__/layout/footer/footer';
import { Header } from './header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>Nextjs SWR</title>
      <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=optional' rel='stylesheet' />
    </Head>
    <div className='flex flex-col h-screen print-fit'>
      <Header />
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  </>
);
