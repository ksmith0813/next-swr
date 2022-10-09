import React, { FC } from 'react';
import Link from 'next/link';

export const Footer: FC = () => (
  <footer className='footer' id='footer'>
    <div className='footer-container'>
      <div>
        <div className='footer-left-panel'>
          <p className='inline pr-2' id='footer-label-left'>
            Left Info
          </p>
        </div>
        <div className='pt-2.5'>
          <Link href='https://github.com/ksmith0813/next-swr' id='github-link'>
            https://github.com/ksmith0813/next-swr
          </Link>
        </div>
      </div>
      <div id='footer-copyright'>Kevin Smith</div>
    </div>
  </footer>
);
