import React, { FC } from 'react';
import Image from 'next/image';
import NoResults from 'public/no-data.svg';

export const searchNoResultsTestIds = {
  image: 'display-no-results-image',
  message: 'display-no-results-message',
};

interface SearchNoResultsProps {
  message: string;
}

export const SearchNoResults: FC<SearchNoResultsProps> = ({ message }) => (
  <div className='flex flex-col justify-center items-center text-center h-full'>
    <Image src={NoResults} width={384} height={256} alt='' priority id={searchNoResultsTestIds.image} />
    {message && (
      <p id={searchNoResultsTestIds.message} className='pt-2 block font-bold text-base w-[325px]'>
        {message}
      </p>
    )}
  </div>
);
