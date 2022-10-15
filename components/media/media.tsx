import React, { FC } from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { SearchInput } from 'components/__common__/search/searchInput';

interface MediaProps {
  search?: string;
}

export const Media: FC<MediaProps> = ({ search }) => {
  return (
    <Page title={TITLES.media}>
      <SearchInput route={ROUTES.media} />
    </Page>
  );
};
