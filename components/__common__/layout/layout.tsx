/* eslint-disable @next/next/no-page-custom-font */
import React, { FC } from 'react';
import { Footer } from 'components/__common__/layout/footer/footer';
import { Header } from './header/header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className='flex flex-col h-screen print-fit'>
    <Header />
    <div className='flex-1'>{children}</div>
    <Footer />
  </div>
);
