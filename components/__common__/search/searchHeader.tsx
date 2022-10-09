import React, { FC } from 'react';

export const searchHeaderTestId = 'search-header';

interface SearchHeaderProps {
  header?: string;
  tagline?: string;
  search?: string;
}

const searchTitleId = 'search-title';

export const SearchHeader: FC<SearchHeaderProps> = ({ header, search, tagline }) => (
  <div id={searchHeaderTestId}>
    <div className='mb-4'>
      <span id={searchTitleId} className={searchTitleId}>
        {header}
      </span>
    </div>
    <div className='search-container'>
      <div>
        {search && (
          <>
            <span>{`${tagline} `}</span>
            <span className='font-bold'>{`"${search}"`}</span>
          </>
        )}
      </div>
    </div>
  </div>
);
