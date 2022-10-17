import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { useRouter } from 'next/router';
import { NoData } from 'components/__common__/display/noData';

export const Weather = () => {
  const router = useRouter();

  const search = router?.query?.q as string;

  return (
    <Page title={TITLES.weather} route={ROUTES.weatherSearch}>
      {!search && <NoData />}
    </Page>
  );
};
