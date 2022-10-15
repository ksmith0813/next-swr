import React, { FC } from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { SearchInput } from 'components/__common__/search/searchInput';

interface PeopleProps {
  search?: string;
}

export const People: FC<PeopleProps> = ({ search }) => {
  return (
    <Page title={TITLES.people}>
      <SearchInput route={ROUTES.people} />
    </Page>
  );
};
