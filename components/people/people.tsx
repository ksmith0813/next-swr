import React from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { GET_USERS } from 'graphql/user';
import useSWR from 'swr';
import { DataTable } from 'components/common/controls/dataTable/dataTable';
import { useRouter } from 'next/router';
import { peopleColumns, PersonData } from './peopleColumns';
import { Person } from './person';

interface PictureProps {
  thumbnail: string;
}

interface NameProps {
  first: string;
  last: string;
}

interface DateOfBirthProps {
  age: number;
}
interface LocationProps {
  city: string;
  state: string;
  postcode: string;
  country: string;
}

interface ResultsProps {
  id: number;
  picture: PictureProps;
  name: NameProps;
  email: string;
  dob: DateOfBirthProps;
  phone: string;
  location: LocationProps;
}

const peopleMapper = (results: ResultsProps[]) => {
  if (!results) return [];
  const people: PersonData[] = [];

  results.forEach((item: ResultsProps, index: number) => {
    const { location } = item;
    people.push({
      id: index.toString(),
      picture: item.picture.thumbnail,
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      age: item.dob.age,
      phone: item.phone,
      city: location.city,
      state: location.state,
      postalCode: location.postcode,
      country: location.country,
    });
  });

  return people;
};

export const People = () => {
  const router = useRouter();

  // TODO: Since the user api returns random users everytime, consider putting results in redux store.
  const { data, error } = useSWR(GET_USERS);

  const detailId = router?.query?.q as string;

  if (detailId) {
    return <Person />;
  }

  const handleClick = (row: PersonData) => {
    router.push({
      pathname: ROUTES.peopleDetail,
      query: { q: row.id },
    });
  };

  const tableContent = (
    <DataTable
      columns={peopleColumns}
      data={peopleMapper(data?.users.results)}
      loading={!data && !error}
      onClick={handleClick}
      testId='people-table'
    />
  );

  return (
    <Page title={TITLES.people}>
      <div className='bg-white border border-grayScale03'>{tableContent}</div>
    </Page>
  );
};
