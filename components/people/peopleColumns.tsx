import { Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';

export type PersonData = {
  id: string;
  picture: string;
  name: string;
  email: string;
  age: number;
  country: string;
  state: string;
  city: string;
  phone: string;
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
  postalCode: 'postalCode-column-header',
  country: 'country-column-header',
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
    render: (value) => <b>{value}</b>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 100,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    width: 150,
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'State',
    dataIndex: 'state',
  },

  {
    title: 'Postal Code',
    dataIndex: 'postalCode',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
];
