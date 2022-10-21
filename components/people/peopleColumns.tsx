import { Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { sortAlphebetically } from 'components/common/controls/dataTable/dataTable';
import { ROUTES } from 'constants/global';
import Link from 'next/link';

export type PersonData = {
  id: string;
  picture: string;
  name: string;
  email: string;
  age: number;
  phone: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
};

export const peopleColumnTestIds = {
  id: 'id-column-header',
  picture: 'picture-column-header',
  name: 'name-column-header',
  email: 'email-column-header',
  age: 'age-column-header',
  phone: 'phone-column-header',
  city: 'city-column-header',
  state: 'state-column-header',
  country: 'country-column-header',
  postalCode: 'postalCode-column-header',
};

export const peopleColumns: ColumnsType<PersonData> = [
  {
    title: 'Picture',
    dataIndex: 'picture',
    render: (value) => <Avatar src={value} />,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => sortAlphebetically(a, b, 'name'),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => sortAlphebetically(a, b, 'email'),
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'City',
    dataIndex: 'city',
    sorter: (a, b) => sortAlphebetically(a, b, 'name'),
    render: (value) => (
      <Link href={`${ROUTES.weather}/${value}`} className='city-link'>
        {value}
      </Link>
    ),
  },
  {
    title: 'State',
    dataIndex: 'state',
    sorter: (a, b) => sortAlphebetically(a, b, 'state'),
  },
  {
    title: 'Country',
    dataIndex: 'country',
    sorter: (a, b) => sortAlphebetically(a, b, 'country'),
  },
  {
    title: 'Postal Code',
    dataIndex: 'postalCode',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];
