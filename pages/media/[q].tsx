import React from 'react';
import { Media as MediaContent } from 'components/media/media';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Media: NextPage = () => {
  const router = useRouter();
  const search = router?.query?.q as string;

  return <MediaContent search={search} />;
};

export default Media;
