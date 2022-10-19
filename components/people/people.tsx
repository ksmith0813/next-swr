import React from 'react';
import { Page } from 'components/common/display/layout/page';
import { TITLES } from 'constants/global';
import { useSWRReady } from 'utils/swr';
import { GET_USERS } from 'graphql/user';
import useSWR from 'swr';
import { DataTable } from 'components/common/controls/table/dataTable';
import { peopleColumns, PersonData } from './peopleColumns';

export const People = () => {
  const { data, error } = useSWR(useSWRReady(true, GET_USERS));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const peopleMapper = (results: any = []) => {
    const people: PersonData[] = [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    results.forEach((item: any) => {
      const { location } = item;
      people.push({
        id: item.id?.value,
        picture: item.picture.thumbnail,
        name: `${item.name.first} ${item.name.last}`,
        email: item.email,
        age: item.dob.age,
        state: location.state,
        city: location.city,
        phone: item.phone,
        postalCode: location.postcode,
        country: location.country,
      });
    });

    return people;
  };

  const tableContent = (
    <DataTable
      id='id'
      columns={peopleColumns}
      data={peopleMapper(data?.users.results)}
      loading={!data && !error}
      testId='people-table'
    />
  );

  return (
    <Page title={TITLES.people}>
      <div className='bg-white'>{tableContent}</div>
    </Page>
  );
};
