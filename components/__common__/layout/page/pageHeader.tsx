import React, { FC } from 'react';

type MetadataType = {
  activeLoan: string;
  activeBusiness: string;
  name: string;
};

export const formatTitle = (title: string) => {
  return `${title?.replace(' ', '-').toLowerCase()}`;
};

interface DisplayDataProps {
  title: string;
  value?: string | null;
}

export const pageHeaderTestId = `display-data`;

const DisplayData: FC<DisplayDataProps> = ({ title, value }) => {
  const formattedTitle = formatTitle(title);
  const headerTestId = `${pageHeaderTestId}-${formattedTitle}-header`;
  const valueTestId = `${pageHeaderTestId}-${formattedTitle}-${value ? 'value' : 'undefined'}`;

  return (
    <div className='block w-fit ml-10'>
      <p className='text-xs font-bold text-black1' id={headerTestId}>
        {title}
      </p>
      <p className='text-xl font-bold text-black' id={valueTestId}>
        {value || '-'}
      </p>
    </div>
  );
};

interface PageHeaderProps {
  metadata: MetadataType;
}

export const PageHeader: FC<PageHeaderProps> = () => {
  return (
    <div id='page-header' className='flex'>
      <DisplayData title='Test' value='Test' />
      <DisplayData title='Test' value='Test' />
    </div>
  );
};
