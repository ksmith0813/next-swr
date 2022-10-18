import React from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { useRouter } from 'next/router';
import { NoData } from 'components/common/display/noData';

export const People = () => {
  const router = useRouter();

  const search = router?.query?.q as string;

  return (
    <Page title={TITLES.people} route={ROUTES.peopleSearch}>
      {!search && <NoData />}
    </Page>
  );
};
