import React from 'react';
import type { NextPage } from 'next';
import { Media as MediaContent } from 'components/media/media';
import { MediaProvider } from 'components/media/context/mediaContext';

const Media: NextPage = () => (
  <MediaProvider>
    <MediaContent />
  </MediaProvider>
);

export default Media;
