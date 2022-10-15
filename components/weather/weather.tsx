import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { SearchInput } from 'components/__common__/search/searchInput';

export const Weather = () => {
  return (
    <Page title={TITLES.weather}>
      <SearchInput
        route={ROUTES.weather}
        placeholder='You can search by zip code, latitude/longitude, or city/state.'
      />
    </Page>
  );
};
