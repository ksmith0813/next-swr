import React, { FC } from 'react';
import Link from 'next/link';

export const Footer: FC = () => (
  <footer className='footer-container' id='footer'>
    <Link href='https://github.com/ksmith0813/next-swr' id='github-link'>
      Github
    </Link>
  </footer>
);
