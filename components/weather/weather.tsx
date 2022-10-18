import React from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { useRouter } from 'next/router';
import { NoData } from 'components/common/display/noData';

export const Weather = () => {
  const router = useRouter();

  const search = router?.query?.q as string;

  return (
    <Page title={TITLES.weather} route={ROUTES.weatherSearch}>
      {!search && <NoData />}
    </Page>
  );
};
