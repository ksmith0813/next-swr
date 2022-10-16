import { FC } from 'react';
import NoDataIcon from 'public/no-data.svg';
import Image from 'next/image';

interface NoDataProps {
  message?: string;
}

export const NoData: FC<NoDataProps> = ({ message = 'No Data' }) => (
  <div className='content-center h-[calc(100vh-400px)]'>
    <Image src={NoDataIcon} alt='No Data' height={200} width={200} priority />
    <div className='text-base text-grayScale06'>{message}</div>
  </div>
);
