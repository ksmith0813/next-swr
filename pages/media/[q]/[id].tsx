import React from 'react';
import type { NextPage } from 'next';
import { MediaDetail as MediaDetailContent } from 'components/media/mediaDetail';
import { MediaProvider } from 'components/media/mediaContext';

const MediaDetail: NextPage = () => (
  <MediaProvider>
    <MediaDetailContent />
  </MediaProvider>
);

export default MediaDetail;
