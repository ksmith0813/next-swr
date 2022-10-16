import React from 'react';
import { Page } from 'components/__common__/layout/page/page';
import { ROUTES, TITLES } from 'constants/global';
import { MediaList } from './controls/mediaList';

export const Media = () => {
  return (
    <Page title={TITLES.media} route={ROUTES.media}>
      <MediaList />
    </Page>
  );
};
