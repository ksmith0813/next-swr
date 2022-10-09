import { FC } from 'react';
import { LoaderContainer } from 'components/__common__/loader/loaderContainer';
import { STRINGS } from 'constants/global';
import { SearchNoResults } from './searchNoResults';

export const searchTestId = 'search-results-table';

interface SearchResultsProps {
  loading?: boolean;
}

export const SearchResults: FC<SearchResultsProps> = ({ loading = false }) => {
  return (
    <LoaderContainer loading={loading}>
      <div className='content-container h-full'>
        <div className='px-4 py-6 h-full'>
          <div className='flex justify-center items-center h-[calc(100%-160px)]'>
            <SearchNoResults message={STRINGS.noResultsFound} />
          </div>
        </div>
      </div>
    </LoaderContainer>
  );
};
