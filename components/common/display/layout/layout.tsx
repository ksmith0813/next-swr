import React, { FC } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className='h-screen print-fit'>
    <Header />
    <div className='flex-1'>{children}</div>
    <Footer />
  </div>
);
