import React, { FC } from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { SearchInput } from 'components/__common__/search/searchInput';

interface WeatherProps {
  search?: string;
}

export const Weather: FC<WeatherProps> = ({ search }) => {
  return (
    <Page title={TITLES.weather}>
      <SearchInput route={ROUTES.weather} />
    </Page>
  );
};
