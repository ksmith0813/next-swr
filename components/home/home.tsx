import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { SearchNoResults } from 'components/__common__/search/searchNoResults';

export const Home = () => {
  return (
    <Page title='Search for Stuff' showHero>
      <div className='content-container w-full h-full flex flex-col items-center'>
        <SearchNoResults message='No Results' />
      </div>
    </Page>
  );
};
