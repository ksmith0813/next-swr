import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { SearchInput } from 'components/__common__/search/searchInput';

export const People = () => {
  return (
    <Page title={TITLES.people}>
      <SearchInput
        route={ROUTES.people}
        placeholder='You can search for people by name, city, state, or date of birth.'
      />
    </Page>
  );
};
