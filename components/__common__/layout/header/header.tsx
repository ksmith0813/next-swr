import React from 'react';
import { DisplayedUser } from 'components/__common__/layout/header/displayedUser';
import { Logo } from './logo';

export const Header = () => {
  const printableHeader = (
    <div className='hidden print:inline-block'>
      <Logo />
    </div>
  );

  return (
    <>
      <div className='print-hidden bg-offWhite flex justify-between items-center p-[12px] w-full' id='header'>
        <div>
          <Logo />
        </div>
        <div>
          <DisplayedUser />
        </div>
      </div>
      {printableHeader}
    </>
  );
};
