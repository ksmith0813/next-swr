import React, { useEffect } from 'react';
import { Page } from 'components/common/display/layout/page';
import { ROUTES, TITLES } from 'constants/global';
import { GET_USERS } from 'graphql/user';
import useSWR from 'swr';
import { DataTable } from 'components/common/controls/dataTable/dataTable';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setPeople, setInitialLoad, getPeopleState, ResultsProps } from 'store/slices/peopleSlice';
import { peopleColumns, PersonData } from './peopleColumns';
import { Person } from './person';

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
  const state = useSelector(getPeopleState);
  const dispatch = useDispatch();

  const { data, error } = useSWR(GET_USERS);

  useEffect(() => {
    if (data && !state?.people.users.length) {
      dispatch(setPeople(data?.users.results));
      dispatch(setInitialLoad());
    }
    // eslint-disable-next-line
  }, []);

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
      data={peopleMapper(state?.people?.users)}
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
