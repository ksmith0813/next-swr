import { FC } from 'react';
import NoDataIcon from 'public/no-data.svg';
import Image from 'next/image';

interface NoDataProps {
  message?: string;
}

export const NoData: FC<NoDataProps> = ({ message = 'No Data' }) => (
  <div className='content-center h-[calc(100vh-500px)]'>
    <Image src={NoDataIcon} alt='No Data' height={300} width={300} priority />
    <div className='text-base text-grayScale06'>{message}</div>
  </div>
);
