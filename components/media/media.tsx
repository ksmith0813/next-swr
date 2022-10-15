import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { SearchInput } from 'components/__common__/search/searchInput';

export const Media = () => {
  return (
    <Page title={TITLES.media}>
      <SearchInput route={ROUTES.media} placeholder='You can search for your favorite movie, TV show, or video game.' />
    </Page>
  );
};
