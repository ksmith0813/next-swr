import React from 'react';
import { People as PeopleContent } from 'components/people/people';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const People: NextPage = () => {
  const router = useRouter();
  const search = router?.query?.q as string;

  return <PeopleContent search={search} />;
};

export default People;
