import React, { FC } from 'react';
import Link from 'next/link';
import { Header } from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <div className='flex flex-col h-screen print-fit'>
    <Header />
    <div className='flex-1'>{children}</div>
    <footer className='footer-container' id='footer'>
      <Link href='https://github.com/ksmith0813/next-swr' id='github-link'>
        Github
      </Link>
    </footer>
  </div>
);
