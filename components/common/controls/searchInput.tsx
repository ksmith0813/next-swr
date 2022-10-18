import React, { ChangeEvent, FC, KeyboardEventHandler, useState } from 'react';
import { Col, Input, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export interface SearchProps {
  route: string;
  placeholder?: string;
  hasSearchIcon?: boolean;
}

export const SearchInput: FC<SearchProps> = ({ route, placeholder = 'Enter Search', hasSearchIcon = true }) => {
  const router = useRouter();

  const [searchString, setSearchString] = useState('');

  const handleSearch = (path: string) => {
    router.replace({
      pathname: path,
      query: { q: searchString },
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setSearchString(value);
  };

  const handleSubmit: KeyboardEventHandler<HTMLInputElement> = () => searchString && handleSearch(route);

  const searchInputContent = (
    <Input
      value={searchString}
      prefix={hasSearchIcon && <SearchOutlined className='search-input-icon' id='search-input-icon' />}
      style={{ width: '100%' }}
      placeholder={placeholder}
      onChange={handleChange}
      onPressEnter={handleSubmit}
      size='large'
      autoFocus
      id='search-input'
    />
  );

  return (
    <Row justify='space-between' align='middle' className='my-4 pb-2 print-hidden'>
      <Col flex={1}>{searchInputContent}</Col>
    </Row>
  );
};
