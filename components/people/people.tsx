import React from 'react';
import { Page } from 'components/common/display/layout/page';
import { TITLES } from 'constants/global';
import { GET_USERS } from 'graphql/user';
import useSWR from 'swr';
import { DataTable } from 'components/common/controls/dataTable/dataTable';
import { peopleColumns, PersonData } from './peopleColumns';

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
  const { data, error } = useSWR(GET_USERS);

  const tableContent = (
    <DataTable
      columns={peopleColumns}
      data={peopleMapper(data?.users.results)}
      loading={!data && !error}
      testId='people-table'
    />
  );

  return (
    <Page title={TITLES.people}>
      <div className='bg-white border border-grayScale03'>{tableContent}</div>
    </Page>
  );
};
