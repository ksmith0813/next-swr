import React, { ChangeEvent, FC, KeyboardEventHandler, useState } from 'react';
import { Col, Input, Row } from 'antd';
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons';
import { IconLinkButton } from 'components/__common__/button/iconLinkButton';
import { LINK_LABELS } from 'constants/global';
import { useRouter } from 'next/router';

export interface SearchProps {
  route: string;
  placeholder?: string;
  hasSearchIcon?: boolean;
}

export const SearchInput: FC<SearchProps> = ({ route, placeholder = 'Enter Search', hasSearchIcon = true }) => {
  const router = useRouter();

  const search = router?.query?.q;

  const [searchString, setSearchString] = useState('');

  const handleSearch = (path: string) => {
    router.replace({
      pathname: path,
      query: { q: searchString },
    });
  };

  const handleReturnToSearch = () => {
    router.push({
      pathname: route,
      query: { q: search },
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setSearchString(value);
  };

  const handleSubmit: KeyboardEventHandler<HTMLInputElement> = () => searchString && handleSearch(route);

  const backToResultsContent = search && (
    <IconLinkButton
      title={LINK_LABELS.backToSearchResults}
      icon={<ArrowLeftOutlined />}
      onClick={handleReturnToSearch}
      testId='back-to-search-link'
    />
  );

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
      {backToResultsContent && <Col className='-ml-4'>{backToResultsContent}</Col>}
      <Col flex={1}>{searchInputContent}</Col>
    </Row>
  );
};
